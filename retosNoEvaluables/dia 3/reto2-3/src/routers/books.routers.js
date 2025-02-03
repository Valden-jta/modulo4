// *---------------------- template ---------------------- *\\

//?_________  Imports _________\\ 
const {Router} = require('express');                        
const router = Router();

//?_________  rutas y metodos _________\\ 
const booksCtrl = require('../controller/books.controller')

router.get('/', booksCtrl.getStart);
router.get('/books?id=5', booksCtrl.getBooks);
router.get('/books', booksCtrl.getBooks);
router.post('/books', booksCtrl.postBooks);
router.put('/books', booksCtrl.putBooks);
router.delete('/books', booksCtrl.deleteBooks);


//?_________  Exports _________\\ 
module.exports = router;