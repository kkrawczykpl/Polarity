import React, { useState } from 'react';
import './app.css';

export const App: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <p>Current count is { count }</p>
            <button onClick={() => setCount((count) => count + 1)}>Add one to count!</button>
        </div>
    );
};