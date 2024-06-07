import { Request, Response } from 'express';
import Album from '../models/album';
import Artista from '../models/artista';
import Song from '../models/musicas';
import AlbumSong from '../models/albumSom';

const albumController = {
  async getAllAlbums(req: Request, res: Response) {
    try {
      const albums = await Album.findAll();
      const songs = await Song.findAll();
      res.render('album', { albums, songs });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar álbuns.');
    }
  },

  async addSongToAlbum(req: Request, res: Response) {
    try {
      const { albumId, songId } = req.body;
      console.log(albumId, songId)

      if (!albumId || !songId) {
        return res.status(400).send('IDs de Álbum ou Música não fornecidos.');
      }
  
      const album = await Album.findByPk(albumId);
      const song = await Song.findByPk(songId);
  
      if (!album || !song) {
        return res.status(404).send('Álbum ou Música não encontrado.');
      }
  
      await AlbumSong.create({ AlbumId: albumId, SongId: songId });
  
      res.redirect('/albums');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao associar música ao álbum.');
    }
  },

  async createAlbum(req: Request, res: Response) {
    try {
      const { title } = req.body;
      await Album.create({ title });
      res.redirect('/albums');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao adicionar álbum.');
    }
  },

  async updateAlbum(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title } = req.body;
      await Album.update({ title }, { where: { id } });
      res.redirect('/albums');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao atualizar álbum.');
    }
  },

  async deleteAlbum(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Album.destroy({ where: { id } });
      res.redirect('/albums');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao deletar álbum.');
    }
  },
};

export default albumController;