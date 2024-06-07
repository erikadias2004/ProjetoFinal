import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class ArtistAlbum extends Model {}

ArtistAlbum.init({
  albumId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Albums',
      key: 'id',
    },
    primaryKey: true,
  },
  artistId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Artista',
      key: 'id',
    },
    primaryKey: true,
  },
}, {
  sequelize,
  modelName: 'ArtistAlbum',
});

export default ArtistAlbum;