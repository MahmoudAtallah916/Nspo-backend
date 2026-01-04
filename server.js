import app from '../qc/src/app.js';
import { connectDB } from './src/config/database.js';

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});