import Pokemon from "../models/Pokemon.js";

export const createPokemon = async (req, res) => {
  try {
    const pokemon = new Pokemon(req.body);
    const savedPokemon = await pokemon.save();
    res.json(savedPokemon);
  } catch (error) {
    console.log(error.message);
  }
};

export const readPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (error) {
    console.log(error.message);
  }
};

export const readPokemon = async (req, res) => {
  res.send('Read Pokémon');
};

export const updatePokemon = async (req, res) => {
  res.send('Update Pokémons');
};

export const deletePokemon = async (req, res) => {
  res.send('Delete Pokémons');
};