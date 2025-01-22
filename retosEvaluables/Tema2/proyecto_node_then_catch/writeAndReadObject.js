const fs = require("fs/promises");

writeAndRead = (path, object) => {
    fs.writeFile(path, JSON.stringify(object, null, 3))
    .then(() => {
        return fs.readFile(path, 'utf8');
    })
    .then(result => console.log(JSON.parse(result)))
    .catch(err => console.log(err))
}

module.exports = {writeAndRead};