const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Peticion recibida del cliente');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers['user-agent']);
    res.type('application/json');
    res.send({ok:true,code:res.statusCode, message:'Recibido!'});
});

app.get('/bye',(req,res)=>{
    console.log('Cliente saliendo');
    res.type('application/json');
    res.send({ok:true, code:res.statusCode, message:'Adiós!'});
})

app.listen(3000);