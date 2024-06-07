import { Router } from 'express';
import Album from '../models/album';
import albumController from '../controllers/albumController';
import Song from '../models/musicas';

const router = Router();

router.get('/', async (req, res) => {
  const albums = await Album.findAll();
  const songs = await Song.findAll()
  res.render('album', { albums, songs });
});

router.post('/create', albumController.createAlbum);
router.post('/delete/:id', albumController.deleteAlbum);
router.post('/update/:id', albumController.updateAlbum);
router.post('/add-song', albumController.addSongToAlbum);

export default router;
