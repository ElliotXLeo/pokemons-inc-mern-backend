import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from './env.js';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

export const uploadFile = async (filePath) => {
  try {
    return await cloudinary.uploader.upload(filePath, {
      folder: 'pokemons-inc-mern'
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFile = async (id) => {
  return await cloudinary.uploader.destroy(id);
};