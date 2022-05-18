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
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findById(id);
    if (pokemon === null) {
      const error = new Error('Datos incorrectos');
      return res.status(404).json({
        message: error.message
      });
    } else {
      return res.status(200).json(pokemon);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePokemon = async (req, res) => {
  res.send('Update Pokémons');
};

export const deletePokemon = async (req, res) => {
  res.send('Delete Pokémons');
};