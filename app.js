import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';
import pokemonRouter from './routes/pokemon.routes.js';

const app = express();
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}));
app.use(cors({
  origin: '*'
}));

app.use('/api', pokemonRouter);

export default app;