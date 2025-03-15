import dotenv from "dotenv";
dotenv.config();

import server from "./libraries/server";
import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle OPTIONS method for preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Your existing logic goes here
  res.status(200).json({ message: 'Hello from Vercel' });
};

server();
