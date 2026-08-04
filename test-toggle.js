import mongoose from 'mongoose';
import UIControl from './src/models/UIControl.js';
import { connectDB } from './src/config/database.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });

const key = process.argv[2] || 'investment_page';
const val = process.argv[3] === 'true';

const run = async () => {
  try {
    await connectDB();
    const result = await UIControl.findOneAndUpdate({ key }, { isEnabled: val }, { new: true });
    console.log(`Updated key '${key}' isEnabled to: ${result.isEnabled}`);
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error toggling flag:', error);
    process.exit(1);
  }
};

run();
