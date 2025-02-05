const axios = require('axios');

const apiUrl = 'https://hng-1-6o5c.onrender.com/api/classify-number'; 


async function pingPong() {
  try {
    const response = await axios.get(apiUrl);
    console.log('API is alive! Response status:', response.status);
  } catch (error) {
    console.error('Error pinging API:', error);
  }
}

setInterval(pingPong, 300000);
