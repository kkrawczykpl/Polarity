import React, { useState } from 'react';
import './app.css';
import { Sidebar } from './components/sidebar/sidebar';

export const App: React.FC = () => {
    const [count, setCount] = useState(0);

    const toggleDarkMode = async () => await window.darkMode.toggle();
    const resetDarkMode = async () => await window.darkMode.system();

    return (
        <div className="app">
            <div className="sidebar-wrapper">
                <Sidebar />
            </div>
            <div className="main-wrapper">
                <div className="main-window">
                    <p>Current count is { count }</p>
                    <button onClick={() => setCount((count) => count + 1)}>Add one to count!</button>

                    <button id="toggle-dark-mode" onClick={toggleDarkMode}>Toggle Dark Mode</button>
                    <button id="reset-dark-mode" onClick={resetDarkMode}>Reset Dark Mode to System Theme</button>
                </div>
                <span>Current theme object (value of window.darkMode): <p>{ JSON.stringify(window.darkMode) || 'null' }</p></span>
            </div>
        </div>
    );
};