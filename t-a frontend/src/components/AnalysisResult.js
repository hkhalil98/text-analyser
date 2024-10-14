// src/components/AnalysisResult.js
import React from 'react';

const AnalysisResult = ({ analysis }) => {
    if (!analysis) return null;

    return (
        <div>
            <h3>Analysis Results</h3>
            <ul>
                {analysis.map((word, index) => (
                    <li key={index}>
                        <strong>{word.text}</strong> - {word.pos}, {word.dependency}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnalysisResult;