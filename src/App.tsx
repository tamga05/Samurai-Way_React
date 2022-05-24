import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <div className="App">
                Hello, samurai! Let's go!
                <Technologies/>
            </div>
        </div>
    );
}

export default App;

const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">News Feed</a>
            <a href="#">Messages</a>
        </div>
    );
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
            </ul>
        </div>
    );
}

