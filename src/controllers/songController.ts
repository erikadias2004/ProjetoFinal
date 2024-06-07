import { Request, Response } from 'express';
import Som from '../models/som';

const songController = {
  async getAllSongs(req: Request, res: Response) {
    try {
      const songs = await Som.findAll();
      res.render('som', { songs });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar músicas.');
    }
  },

  async createSong(req: Request, res: Response) {
    try {
      const { title } = req.body;
      await Som.create({ title });
      res.redirect('/songs');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao adicionar música.');
    }
  },

  async updateSong(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title } = req.body;
      await Som.update({ title }, { where: { id } });
      res.redirect('/songs');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao atualizar música.');
    }
  },

  async deleteSong(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Som.destroy({ where: { id } });
      res.redirect('/songs');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao deletar música.');
    }
  },
};

export default songController;