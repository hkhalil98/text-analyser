// src/components/TextInput.js
import React, { useState } from 'react';

const TextInput = ({ onSubmit }) => {
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim()) {
            onSubmit(inputText);  // Pass the text to the parent component (App)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Paste your text here..."
                    rows="5"
                    cols="50"
                />
                <br />
                <button type="submit">Analyse Text</button>
            </form>
        </div>
    );
};

export default TextInput;