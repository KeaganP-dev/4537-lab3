function getDate() {
    return new Date();
  }

function appendToFile(text) {
    const fs = require('fs');
    fs.appendFile('file.txt', text, (err) => {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  }

function readFile(filename) {
    const fs = require('fs');
    try {
      return fs.readFileSync(filename, 'utf8');
    } catch (err) {
      return null;
    }
  }
  
  module.exports = { getDate , appendToFile , readFile };