const { readFile } = require("../util");
const cats = require('../data/cats.json'); //автоматично парсва json
const path = require('path')

function catFragment(cat) {
    return `
    <li>
        <img src="${cat.imageUrl}" alt="Black Cat">
        <h3>${cat.name}</h3>
        <p><span>Breed: </span>${cat.breed}</p>
        <p><span>Description: </span>${cat.description}</p>
        <ul class="buttons">
            <li class="btn edit"><a href="">Change Info</a></li>
            <li class="btn delete"><a href="">New Home</a></li>
        </ul>
    </li>
    `
}
 
function homeHandler(res) {
    const templatePath = path.join(__dirname, '../views/home/index.html')
    const template = readFile(templatePath);
    res.writeHead(200, { 
        'Content-Type': 'text/html'
    });

    const html = template.replace('%%catContent%%', cats.map(catFragment).join('\n'));

    res.write(html);
    res.end();
}


module.exports = {
    homeHandler
}