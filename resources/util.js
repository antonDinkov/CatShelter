const fs = require('fs');
const path = require('path');

function readFile (filePath) {
    const fullPath = path.join('./', filePath);
    console.log(fullPath);
    
    const data = fs.readFileSync(fullPath);
    return data.toString();
}

module.exports = {
    readFile
}