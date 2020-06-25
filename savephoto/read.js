const fs = require('fs');
const https = require('https');
const path = './files';
const request = require('request');

// function readDir () {
//   let fileDir = fs.readdir(path, (err, files) => {
//     if (err) throw err;
//     console.log(files);
    
//     let url = fs.readFile(files, 'utf-8').match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/img);
//     // let b = fs.readFile('./files/file2.csv', 'utf-8');
//     console.log(typeof b);
//     console.log(url);
    
    
//   })
// }

// readDir ();


function getLinksFromFile(filePath) {

  let url = fs
    .readFileSync(filePath, 'utf-8')
    .match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/gim);
  
  console.log(url);
}

getLinksFromFile('./files/file2.csv');



function saveImag () {
  // let request = https.request
  
  request
  .get('http://sun9-55.userapi.com/c637928/v637928344/27d4e/IHvJjZW_gR0.jpg')
  .pipe(fs.createWriteStream('./files/asd.jpg'))
}

saveImag ();



// function readDir () {
//   let fileDir = fs.readdir(path, (err, files) => {
//     if (err) throw err;
//     let newArr = files.map((el)=> {
//       // [files должен быть массив] 
//       fs.readFile(`path/${el}`, 'utf-8', ()=> {}).match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/img);
//     })
//     console.log(newArr);
    
//   })
//   console.log(fileDir);    
// }

// // let url = fs.readFile(files, 'utf-8').match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/img);
// // // let b = fs.readFile('./files/file2.csv', 'utf-8');
// // console.log(typeof b);


// readDir ();