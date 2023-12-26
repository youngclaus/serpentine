const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/spotify/token', async (req, res) => {
    const code = req.body.code;
    const data = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:3000/callback',
        client_id: '1e0f86a32bef4945880f774deaf9e988',
        client_secret: '35ca57cc47c645bc810507f5a527413a'
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
        // Handle error
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


