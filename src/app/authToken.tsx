// utils/authToken.ts
import axios from 'axios';

let token: string | null = null;
let tokenExpires = 0;

export const getToken = async () => {
  if (Date.now() < tokenExpires) {
    return token;
  }

  const url = 'https://login.bol.com/token';
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  const response = await axios.post(url, params, {
    headers: {
      'Authorization': `Basic ${Buffer.from(`${process.env.BOL_CLIENT_ID}:${process.env.BOL_CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  token = response.data.access_token;
  tokenExpires = Date.now() + response.data.expires_in * 1000 - 60000;
  return token;
};
