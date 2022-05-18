import app from './app.js';
import db from './config/db.js';
import { PORT } from './config/env.js';

db();
app.listen(PORT, () => {
  console.log(`Servidor corriendo desde el puerto ${PORT}`);
});