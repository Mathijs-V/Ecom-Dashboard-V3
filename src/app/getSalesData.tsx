// pages/api/getSalesData.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { getToken } from './authToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = await getToken();
    const response = await axios.get('https://api.bol.com/retailer/shipments/invoices/requests', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.retailer.v10+json'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sales data', error });
  }
}

export const config = { runtime: 'client' };