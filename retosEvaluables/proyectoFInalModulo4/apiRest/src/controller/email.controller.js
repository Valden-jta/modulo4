//?_________  Imports _________\\
const { sendPostMark } = require("../postmark/postmarkApi");
const { Email } = require("../models/email");
const { allEmails } = require("../data/email_data");

//?_________ Datos _________\\

//?_________ Funciones _________\\

function postMail(req, response) {
  let email = new Email();
  let answer;
  email.from = req.body.from;
  email.to = req.body.to;
  email.subject = req.body.subject;
  email.message = req.body.message;

  if (!email.from || !email.to || !email.subject || !email.message) {
    answer = {
      error: true,
      code: 400,
      message: "Debes rellenar todos los campos",
    };
    return response.send(answer);
  }

  let emailData = {
    from: email.from,
    to: email.to,
    subject: email.subject,
    message: email.message,
  };
  // El envío del mail se hara utilizando la API REST de postMark (implementado en postMarkApi.js)
  sendPostMark(emailData)
    .then((results) => {
      allEmails.addEmail(email);
      answer = {
        error: false,
        code: 200,
        message: "Correo enviado con éxito",
        data: results,
      };
      response.send(answer);
    })
    .catch((error) => {
      console.log("El correo no se pudo enviar", error.code, error.message);
      answer = { error: true, code: 500, message: error };
      response.send(answer);
    });
}

//?_________ Exports _________\\

module.exports = { postMail };
