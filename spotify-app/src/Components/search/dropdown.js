import React from 'react';
import './dropdown.css';

const Dropdown = ({ suggestions, onSelectSuggestion }) => {
    return (
        <ul className="suggestions-dropdown">
            {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => onSelectSuggestion(suggestion)}>
                    {suggestion}
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;
