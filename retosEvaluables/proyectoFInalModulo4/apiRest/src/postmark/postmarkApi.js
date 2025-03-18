const axios = require("axios");

function sendPostMark(email) {
  const postmarkUrl = "https://api.postmarkapp.com/email";
  const postmark_server_api_token = "ad7ac4d2-4439-426d-9489-4deee855453d";
  let answer;
  // 1. Preparar peticion para postmark:
  let mailRequest = {
    From: email.from,
    To: email.to,
    Subject: email.subject,
    TextBody: email.message,
  };
  // 2. axios envia la peticion
  return axios
    .post(postmarkUrl, mailRequest, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Postmark-Server-Token": postmark_server_api_token,
      },
    })
    .then((response) => {
      console.log("todo bien!!");
      console.log(response.data)
      return response.data;
    })
    .catch((error) => {
      console.log(
        "hubo un error en el envío del email",
        error.code,
        error.message
      );
      throw error;
    });
}

module.exports = { sendPostMark };
