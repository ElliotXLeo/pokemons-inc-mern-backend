import express from 'express';
import db from './config/db.js';
import { PORT } from './config/env.js';
import pokemonRouter from './routes/pokemon.routes.js';

const app = express();
db();
app.listen(PORT, () => {
  console.log(`Servidor corriendo desde el puerto ${PORT}`);
});

app.use('/api', pokemonRouter);