import React from "react";

const CLIENT_ID = "1e0f86a32bef4945880f774deaf9e988";
const REDIRECT_URI = "http://localhost:3000/callback";
const SCOPES = ["user-read-private", "user-read-email"];

const getSpotifyAuthURL = () => {
    const queryParams = new URLSearchParams({
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        scope: SCOPES.join(" "),
        response_type: "code",
        show_dialog: true,
    });

    return `https://accounts.spotify.com/authorize?${queryParams.toString()}`;
};

export function SpotifyLoginButton() {
    const handleLogin = () => {
        window.location.href = getSpotifyAuthURL();
    };

    return (
        <button onClick={handleLogin}>Login with Spotify</button>
    );
}
