import { config } from "dotenv";
config();
import cloudinary, { config as _config } from "cloudinary";
//import {v2 as cloudinary} from 'cloudinary';

// config
_config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
