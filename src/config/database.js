import mongoose from 'mongoose';
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "1.0.0.1"]);
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  if (cached.conn) return cached.conn; // reuse existing connection

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = mongoose.connect(process.env.MONGO_URI, opts).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log('MongoDB connected');
  return cached.conn;
};
