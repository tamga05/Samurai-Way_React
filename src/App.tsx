import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
    return (
        <div className="app__mainWrapper">
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Dialogs props={'any'}/>
                </div>
                {/*<Profile/>*/}
            </div>
        </div>
    );
};

export default App;











