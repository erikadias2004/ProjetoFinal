import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class AlbumSong extends Model {}

AlbumSong.init({
  AlbumId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Albums',
      key: 'id',
    },
    primaryKey: true,
  },
  SongId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Songs',
      key: 'id',
    },
    primaryKey: true,
  },
}, {
  sequelize,
  modelName: 'AlbumSong',
});

export default AlbumSong;