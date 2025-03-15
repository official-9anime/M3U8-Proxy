import dotenv from "dotenv";
dotenv.config();

import server from "./libraries/server";
import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With'); // Allow custom headers

  // Handle preflight requests (OPTIONS)
  if (req.method === 'OPTIONS') {
    // Respond with status 200 and end the request
    return res.status(200).end();
  }

  // Handle normal requests
  res.status(200).json({ message: 'Hello from Vercel' });

  // Call the server function (ensure it's not interfering with CORS)
  server();
};
