const fs = require('fs');
const http = require('http');
const https = require('https');

const path = './files';

function getLinksFromFile(filePath) {
  let url = fs
    .readFileSync(filePath, 'utf-8')
    .match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/gim);

  // console.log(url);
  return url;
}

let newArr = getLinksFromFile('./files/file2.csv');

// console.log(newArr);

function saveImages(url, dest) {
  return new Promise((resolve, reject) => {
    let request = http;
    if (url.substr(0, 5) === 'https') request = https;

    request.get(url, (data) => {
      resolve(data.pipe(fs.createWriteStream(dest)));
    });
  });
}

async function run() {
  for (let i = 0; i < newArr.length; i++) {
    const url = newArr[i];
    // console.log(url);
    const dest = `./files/new2/${i + 1}.jpg`;

    await saveImages(url, dest);
  }
}

run();

// function saveImages(url, dest) {
//   let request = http;
//   if (url.substr(0, 5) === 'https') request = https;

//   request.get(url, (data) => {
//     data.pipe(fs.createWriteStream(dest));
//   });
// }

// saveImages(
//   'https://sun9-55.userapi.com/c637928/v637928344/27d4e/IHvJjZW_gR0.jpg',
//   './files/1.jpg'
// );
