import React from 'react';

export const DebugPage: React.FC = () => {
    return (
        <div className="debug-page">
            <h2>Debug Page</h2>
            <span>Current theme object (value of window.darkMode): <p>{ JSON.stringify(window.darkMode) || 'null' }</p></span>
        </div>
    );
};