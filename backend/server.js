const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
require("dotenv").config();

app.use(cors());

app.get('/agriculture-news', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                apiKey: process.env.VITE_API_KEY, 
                q: 'agriculture',
                language: 'en',
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ message: 'Error fetching agricultural news' });
    }
});

// Define the port the server will run on
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});