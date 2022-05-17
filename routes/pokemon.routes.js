import { Router } from "express";

const pokemonRouter = Router();

pokemonRouter.post('/pokemons', (req, res) => {
  res.send('Create Pokémons');
});

pokemonRouter.get('/pokemons', (req, res) => {
  res.send('Read Pokémons');
});

pokemonRouter.get('/pokemons/:id', (req, res) => {
  res.send('Read Pokémon');
});

pokemonRouter.put('/pokemons/:id', (req, res) => {
  res.send('Update Pokémon');
});

pokemonRouter.delete('/pokemons/:id', (req, res) => {
  res.send('Delete Pokémon');
});

export default pokemonRouter;