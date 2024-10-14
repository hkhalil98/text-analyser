// src/App.js
import React, { useState } from 'react';
import TextInput from './components/TextInput';
import AnalysisResult from './components/AnalysisResult';

const App = () => {
    const [analysis, setAnalysis] = useState(null);

    const handleTextSubmit = async (text) => {
        // Mock backend call, replace this with your actual API call later
        const mockAnalysis = text.split(' ').map((word) => ({
            text: word,
            pos: 'noun',  // For now, assume everything is a noun (mock)
            dependency: 'subject',  // Placeholder
        }));

        setAnalysis(mockAnalysis);
    };

    return (
        <div>
            <h1>Text Analyser</h1>
            <TextInput onSubmit={handleTextSubmit} />
            <AnalysisResult analysis={analysis} />
        </div>
    );
};

export default App;