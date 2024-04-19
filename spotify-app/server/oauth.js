const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const dotenv = require("dotenv");

// update to full local path to .env file
dotenv.config({ path: '/Users/cyoungclaus/Documents/repos/serpentine/spotify-app/.env'});

app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

app.post('/spotify/token', async (req, res) => {
    const code = req.body.code;
    const data = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:3000/callback',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
    });

    try {
        const response = await axios({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            data: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log("Error in post request: ");
        console.error(error.response.data);
        //res.status(500).send("Internal Server Error");
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


