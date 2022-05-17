import { Router } from "express";
import { createPokemon, deletePokemon, readPokemon, readPokemons, updatePokemon } from "../controllers/pokemon.controller.js";

const pokemonRouter = Router();

pokemonRouter.post('/pokemons', createPokemon);

pokemonRouter.get('/pokemons', readPokemons);

pokemonRouter.get('/pokemons/:id', readPokemon);

pokemonRouter.put('/pokemons/:id', updatePokemon);

pokemonRouter.delete('/pokemons/:id', deletePokemon);

export default pokemonRouter;