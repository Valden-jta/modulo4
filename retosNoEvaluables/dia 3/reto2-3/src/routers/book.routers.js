// *---------------------- template ---------------------- *\\

//?_________  Imports _________\\ 
const {Router} = require('express');                        
const router = Router();

//?_________  rutas y metodos _________\\ 
const bookCtrl = require('../controller/book.controller')

router.get('/', bookCtrl.getStart);
router.get('/book', bookCtrl.getBook);
router.post('/book', bookCtrl.postBook);
router.put('/book', bookCtrl.putBook);
router.delete('/book', bookCtrl.deleteBook);


//?_________  Exports _________\\ 
module.exports = router;