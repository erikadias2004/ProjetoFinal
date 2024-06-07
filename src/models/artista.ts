import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class Artista extends Model {}

Artista.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Artista',
});

export default Artista;