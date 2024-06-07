import { Request, Response } from 'express';
import Artista from "../models/artista";
import Album from '../models/album';
import ArtistAlbum from '../models/artistAlbum';

const artistController = {
  async getAllArtistas(req: Request, res: Response) {
    try {
      const artists = await Artista.findAll();
      const albums = await Album.findAll();
      res.render('artista', { artists, albums });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar artistas.');
    }
  },

  async addAlbumToArtist(req: Request, res: Response) {
    try {
      const { artistId, albumId } = req.body;
      
      const artist = await Artista.findByPk(artistId);
      const album = await Album.findByPk(albumId);
      
      if (!artist || !album) {
        return res.status(404).send('Artista ou Álbum não encontrado.');
      }

      await ArtistAlbum.create({ artistId, albumId });

      res.redirect('/artistas');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao associar álbum ao artista.');
    }
  },

  async createArtist(req: Request, res: Response) {
    try {
      const { name } = req.body;
      await Artista.create({ name });
      res.redirect('/artistas');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao adicionar artista.');
    }
  },

  async updateArtist(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      await Artista.update({ name }, { where: { id } });
      res.redirect('/artistas');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao atualizar artista.');
    }
  },

  async deleteArtist(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Artista.destroy({ where: { id } });
      res.redirect('/artistas');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao deletar artista.');
    }
  },
};

export default artistController;