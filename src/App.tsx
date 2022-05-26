import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <div className='app__main-wrapper'>
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;











