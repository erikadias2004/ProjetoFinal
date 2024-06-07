import { Sequelize } from 'sequelize';
import Artista from './artista';
import Album from './album';
import Song from './som';
import ArtistAlbum from './artistAlbum';
import AlbumSong from './albumSom';

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

Artista.belongsToMany(Album, { through: ArtistAlbum });
Album.belongsToMany(Artista, { through: ArtistAlbum });

Album.belongsToMany(Song, { through: AlbumSong });
Song.belongsToMany(Album, { through: AlbumSong });

export { sequelize, Artista, Album, Song, ArtistAlbum, AlbumSong };

sequelize.sync({ force: true }).then(() => {
  console.log('Banco de dados criado com sucesso!');
}).catch((error) => {
  console.error('Erro ao criar o banco de dados:', error);
});