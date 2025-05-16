const fs = require('fs');
const path = require('path');

function readFile (filePath) {
    const fullPath = path.join('./', filePath);
    
    const data = fs.readFileSync(fullPath);
    return data.toString();
}

module.exports = {
    readFile
}