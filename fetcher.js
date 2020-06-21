/* eslint-disable */
const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];

const request = require('request');
const fs = require('fs');

if (filePath.slice(0, 2) === './' && filePath.slice(-5) === '.html') {
  request(`${url}`, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    fs.writeFile(filePath, body, function (err) {
      if (err) {
        return console.log(err);
      }
      fs.stat(filePath, true, (e, stat) => {
        // console.log(e, stat.size);
        let fileSize = stat.size;
        console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
      })
    });
  });
} else console.log('Enter a valid file path!');