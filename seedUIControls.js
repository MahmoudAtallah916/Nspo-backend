import mongoose from 'mongoose';
import UIControl from './src/models/UIControl.js';
import { connectDB } from './src/config/database.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });

const seedData = [
  {
    key: 'home',
    type: 'page',
    scope: { page: 'home' },
    isEnabled: true,
    fallback: { message: 'Home page is temporarily unavailable.' }
  },
  {
    key: 'investment_page',
    type: 'page',
    scope: { page: 'investment_page' },
    isEnabled: true,
    fallback: { message: 'صفحة الفرص الاستثمارية ستكون متاحة قريباً! / Investment Opportunities page is coming soon!' }
  },
  {
    key: 'home.investment_section',
    type: 'section',
    scope: { page: 'home', section: 'investment_section' },
    isEnabled: true,
    fallback: { message: 'قسم الاستثمار غير متاح حالياً / Investment section is temporarily disabled.' }
  }
];

const seed = async () => {
  try {
    console.log('Connecting to database...');
    await connectDB();
    
    console.log('Clearing existing UI Controls...');
    await UIControl.deleteMany({});
    
    console.log('Inserting seed data...');
    const result = await UIControl.insertMany(seedData);
    console.log(`Successfully seeded ${result.length} UI controls!`);
    
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seed();
