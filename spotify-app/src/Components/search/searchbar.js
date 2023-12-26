import React, { useState } from 'react';
import Dropdown from './dropdown.js'
import "./searchbar.css"

function FriendSearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 1) {
            setSuggestions(['friend1', 'friend2', 'friend3']); // Replace with actual data
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="searchbar-container">
            <input 
                type="text" 
                value={searchTerm} 
                onChange={handleInputChange}
                placeholder="Add a friend to start"
                className="searchbar"
            />
            {suggestions.length > 0 && (
                <Dropdown suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
            )}
        </div>
    );
}

export default FriendSearchComponent;
