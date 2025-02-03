const express = require('express');
const app = express();
let person = null;

app.use(express.json());  // MIDDLEWARE -  enviar json


app.get('/',(req,res) => {
   let name = req.query.name; 
   if (!name) {
       res.send({ error: true, code: 200, message: 'Debes proporcionar un nombre' });
       } else {
        res.send({ error: false, code: 200, message: 'Nombre proporcionado', data: name });
   }
});

app.post('/',(req,res) => {
    let req_name = req.body.name;
    let req_surname = req.body.surname;
    let req_age = req.body.age;
    person = {
        name: req_name,
        surname: req_surname, 
        age: req_age
    }
    if (!person != null && (!req_name || !req_surname || !req_age)) {
        res.send({ error: true, code: 200, message: 'Debes introducir todos los datos' });
    } else {
        res.send({ error: false, code: 200, message: 'Datos correctos', data: person });
    }
});

app.listen(3000);