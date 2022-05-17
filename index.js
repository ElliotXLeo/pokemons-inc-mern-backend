import express from 'express';
import pokemonRouter from './routes/pokemon.routes.js';

const app = express();
app.listen(2050);

app.use('/api', pokemonRouter);