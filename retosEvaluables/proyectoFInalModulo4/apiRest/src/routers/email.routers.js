//?_________  Imports _________\\ 
const {Router} = require('express');                        
const router = Router();


//?_________  rutas y metodos _________\\ 
const emailCtrl = require('../controller/email.controller'); 
router.post('/mail', emailCtrl.postMail) // postMail

//?_________  Exports _________\\ 
module.exports = router;