import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class Album extends Model {}

Album.init({
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
  modelName: 'Album',
});

export default Album;