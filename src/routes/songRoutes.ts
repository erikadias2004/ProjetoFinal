import { Router } from 'express';
import Song from '../models/som';

const router = Router();

router.get('/', async (req, res) => {
  const songs = await Song.findAll();
  res.render('songs', { songs });
});

router.post('/create', async (req, res) => {
  const { title } = req.body;
  await Song.create({ title });
  res.redirect('/songs');
});

router.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Song.destroy({ where: { id } });
  res.redirect('/songs');
});

router.post('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  await Song.update({ title }, { where: { id } });
  res.redirect('/songs');
});

export default router;