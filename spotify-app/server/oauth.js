const express = require('express');
const axios = require('axios');
const app = express();

app.post('/spotify/token', async (req, res) => {
    const code = req.body.code;
    const response = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: {
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: YOUR_REDIRECT_URI,
            client_id: YOUR_CLIENT_ID,
            client_secret: YOUR_CLIENT_SECRET
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    res.json(response.data);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
