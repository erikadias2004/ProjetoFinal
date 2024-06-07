import { Router } from 'express';
import Artista from '../models/artista';
import artistController from '../controllers/artistController';
import Album from '../models/album';

const router = Router();

router.get('/', async (req, res) => {
  const artists = await Artista.findAll();
  const albums = await Album.findAll()
  res.render('artista', { artists, albums });
});

router.post('/create', artistController.createArtist);
router.post('/delete/:id', artistController.deleteArtist);
router.post('/update/:id', artistController.updateArtist);
router.post('/add-album', artistController.addAlbumToArtist);

export default router;