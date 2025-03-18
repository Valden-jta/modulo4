//?_________  Imports _________\\

const { allEmails } = require("../data/email_data");

//?_________ Datos _________\\
// datos importados de mock_email_data con el siguiente formato: [{from: 'string', to: 'string', subject:'string',message:'string },...]
let emails = allEmails;

//?_________ Funciones _________\\
// funcion de control
function getStart(req, res) {
  let answer = { error: true, code: 200, message: "Punto de inicio" };
  res.send(answer);
}

// Obtener TODOS los emails enviados DESDE/A la direccion de correo
function getMails(req, res) {
  let answer;
  let emailFrom = req.query.from;
  let emailTo = req.query.to;

  if (emailFrom != null && emailTo == null) {
    // Endopoint: GET/main?from=direccion_correo
    let emailList = emails
      .getList()
      .filter((email) => email.from === emailFrom);
    if (emailList.length > 0) {
      answer = {
        error: false,
        code: 200,
        message: `Correos enviados desde ${emailFrom}`,
        count: emailList.length,
        data: emailList,
      };
    } else {
      answer = {
        error: false,
        code: 200,
        message: `No hay correos enviados desde: ${emailFrom}`,
        count: emailList.length,
      };
    }
  } else if (emailTo != null && emailFrom == null) {
    // Endopoint: GET/main?to=direccion_correo
    let emailList = emails.getList().filter((email) => email.to === emailTo);
    if (emailList.length > 0) {
      answer = {
        error: false,
        code: 200,
        message: `Correos enviados a ${emailTo}`,
        count: emailList.length,
        data: emailList,
      };
    } else {
      answer = {
        error: false,
        code: 200,
        message: `No hay correos enviados a:  ${emailTo}`,
        count: emailList.length,
      };
    }
  } else {
    answer = {
      error: true,
      code: 404,
      message: "Debes especificar una dirección de correo",
    };
  }
  res.send(answer);
}

//?_________ Exports _________\\

module.exports = { getStart, getMails };
