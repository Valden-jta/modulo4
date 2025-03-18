//?_________  Imports _________\\ 
const {Router} = require('express');                        
const router = Router();


//?_________  rutas y metodos _________\\ 
const emailsCtrl = require('../controller/emails.controller'); 
router.get('/', emailsCtrl.getStart) // endpoint de control
router.get('/mail',emailsCtrl.getMails)    // getMail
 // postMail

//?_________  Exports _________\\ 
module.exports = router;