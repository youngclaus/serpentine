import React, { useEffect, useState } from "react";
import { SpotifyLoginButton } from "./button.js";

export const SpotifyLoginComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            fetch('http://localhost:3001/spotify/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: code }),
            })
            .then(response => response.json())
            .then(data => {
                fetchSpotifyUserProfile(data.access_token).then(profile => {
                    setUserProfile(profile);
                    setIsLoggedIn(true);
                });
            })
            .catch(err => {
                console.error('Error during Spotify auth:', err);
            });
        }
    }, []);

    return (
        <div>
        {!isLoggedIn ? (
            <SpotifyLoginButton />
        ) : (
            <img 
                src={userProfile?.images[0]?.url || './Images/default-avatar.png'} 
                alt="Spotify Profile" 
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
        )}
    </div>
    );
};

async function fetchSpotifyUserProfile(accessToken) {
    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    return await response.json();
}
