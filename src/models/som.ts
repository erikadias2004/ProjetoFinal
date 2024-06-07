import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class Song extends Model {}

Song.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Song',
});

export default Song;