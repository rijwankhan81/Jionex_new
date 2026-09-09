// pages/api/contacts.js
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

// Initialize the Cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['POST', 'OPTIONS'],
  })
);

export default async function handler(req, res) {
    console.log(req)
  // Run cors middleware
  await cors(req, res);

  if (req.method === 'OPTIONS') {
    // Preflight request. Reply successfully:
    res.status(200).end();
    return;
  }

  // Your API logic here
  // try {
  //   const response = await fetch(`https://api.rootficus.com/api/v1/contacts`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(req.body),
  //   });

  //   if (!response.ok) {
  //     throw new Error(`HTTP error! Status: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   res.status(200).json(data);
  // } catch (error) {
  //   console.error('Error making API request:', error.message);
  //   res.status(500).json({ error: 'Internal Server Error' });
  // }
}
