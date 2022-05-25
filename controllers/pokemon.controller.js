import { deleteFile, uploadFile } from "../config/cloudinary.js";
import fs from 'fs-extra';
import Pokemon from "../models/Pokemon.js";

export const createPokemon = async (req, res) => {
  try {
    const pokemon = new Pokemon(req.body);
    if (req.files) {
      const response = await uploadFile(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      const { public_id, secure_url } = response;
      pokemon.image = {
        publicId: public_id,
        url: secure_url
      };
    } else if (pokemon.image.url) {
      pokemon.image.publicId = 0;
    } else {
      const error = new Error('La imagen es requerida');
      return res.status(404).json({
        message: error.message
      });
    }
    const createdPokemon = await pokemon.save();
    return res.status(201).json(createdPokemon);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

export const readPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    return res.status(200).json(pokemons);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
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
    return res.status(400).json({
      message: error.message
    });
  }
};

export const updatePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findById(id);
    if (pokemon === null) {
      const error = new Error('Datos incorrectos');
      return res.status(404).json({
        message: error.message
      });
    } else if (req.files) {
      if (isNaN(+pokemon.image.publicId)) {
        await deleteFile(pokemon.image.publicId);
      }
      const response = await uploadFile(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      const { public_id, secure_url } = response;
      pokemon.image = {
        publicId: public_id,
        url: secure_url
      };
    } else if (pokemon.image.url && req.body.image?.url) {
      if (pokemon.image.url !== req.body.image.url) {
        pokemon.image.url = req.body.image.url;
      }
    }
    const { name, type, hp, attack, special } = req.body;
    pokemon.name = name || pokemon.name;
    pokemon.type = type || pokemon.type;
    pokemon.hp = hp || pokemon.hp;
    pokemon.attack = attack || pokemon.attack;
    pokemon.special = special || pokemon.special;
    const updatedPokemon = await pokemon.save();
    return res.status(200).json(updatedPokemon);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

export const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findById(id);
    if (pokemon === null) {
      const error = new Error('Datos incorrectos');
      return res.status(404).json({
        message: error.message
      });
    } else {
      if (isNaN(+pokemon.image.publicId)) {
        await deleteFile(pokemon.image.publicId);
      }
      await pokemon.deleteOne();
      return res.status(200).json({
        message: 'Pokemon eliminado'
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};