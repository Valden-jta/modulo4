const fs = require("fs");

writeAndRead = (path, object) => {
  fs.writeFile(path, JSON.stringify(object, null, 3), (err) => {
    if (err) throw err;
    console.log("Fichero creado");
    fs.readFile(path, "utf8", (err, answer) => {
      if (err) throw err;
      console.log(JSON.parse(answer));
    });
  });
};

module.exports = { writeAndRead };
