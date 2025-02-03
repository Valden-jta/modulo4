// *---------------------- template ---------------------- *\\

//?_________  Imports _________\\ 
import {Router} from 'express';  
import movieCtrl from '../controller/movie.controller.js';

const router = Router();


//?_________  rutas y metodos _________\\ 

router.get('/movie', movieCtrl.getMovie);
router.get('/movie/actor', movieCtrl.getActor);
router.get('/movie/actor?id=8', movieCtrl.getActor);
router.get('/movie/director', movieCtrl.getDirector);
router.get('/movie/writer', movieCtrl.getWriter);
router.post('/movie', movieCtrl.postMovie);
router.post('/movie/actor', movieCtrl.postActor);
router.post('/movie/director', movieCtrl.postDirector);
router.post('/movie/writer', movieCtrl.postWriter);
router.put('/movie', movieCtrl.putMovie);
router.put('/movie/actor', movieCtrl.putActor);
router.put('/movie/director', movieCtrl.putDirector);
router.put('/movie/writer', movieCtrl.putWriter);
router.delete('/movie', movieCtrl.deleteMovie);
router.delete('/movie/Actor', movieCtrl.deleteActor);
router.delete('/movie/director', movieCtrl.deleteDirector);
router.delete('/movie/writer', movieCtrl.deleteWriter);

//?_________  Exports _________\\ 
export default router;