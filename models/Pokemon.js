import mongoose from "mongoose";

const pokemonSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    type: {
      type: String,
      trim: true,
      required: true
    },
    hp: {
      type: Number,
      trim: true,
      required: true
    },
    attack: {
      type: String,
      trim: true,
      required: true
    },
    special: {
      type: String,
      trim: true,
      required: true
    },
    image: {
      publicId: {
        type: String,
        trim: true,
        required: true
      },
      url: {
        type: String,
        trim: true,
        required: true
      }
    }
  },
  {
    timestamps: true
  }
);

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

export default Pokemon;
