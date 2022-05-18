import express from 'express';
import pokemonRouter from './routes/pokemon.routes.js';

const app = express();
app.use('/api', pokemonRouter);

export default app;