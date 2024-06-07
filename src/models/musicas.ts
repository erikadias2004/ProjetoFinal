import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class Song extends Model {}
Song.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Song',
});

export default Song;