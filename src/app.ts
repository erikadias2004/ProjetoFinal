import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './models';
import artistRoutes from './routes/artistsRoutes';
import albumRoutes from './routes/albumRoutes';
import songRoutes from './routes/songRoutes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/artistas', artistRoutes);
app.use('/albums', albumRoutes);
app.use('/songs', songRoutes);

sequelize.sync().then(() => {
  console.log('Database conectado com sucesso!');
});

export default app;