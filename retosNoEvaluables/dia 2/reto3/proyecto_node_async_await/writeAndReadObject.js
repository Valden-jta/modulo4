const fs = require("fs/promises");

async function writeAndRead(path, object) {
    try {
        await fs.writeFile(path, JSON.stringify(object, null, 3));
        let fileContent = await fs.readFile(path, 'utf8');
        console.log(JSON.parse(fileContent));
    }
    catch {
        let err_msg = "Error en writeConsole";
        console.log(err_msg);
    }
}

module.exports = { writeAndRead };