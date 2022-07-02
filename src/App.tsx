import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';
import state, {addPost, changeNewText, RootStateType} from './redux/state';
import Friends from './components/Navbar/Friends/Friends';


type AppType = {
    state: RootStateType
}


const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className="appMainWrapper">
                <div className="appWrapper">
                    <Header/>
                    <Navbar/>
                    <div className="appWrapperContent">
                        <Route path="/dialogs" render={() => <Dialogs state={props.state}/>}/>
                        <Route path="/profile"
                               render={() => <Profile state={props.state} message={state.profilePage.messageForNewPost} addPost={addPost}
                                                      changeNewText={changeNewText}/>}/>

                        {/*<Route path="/news" render={() => <News/>}/>*/}
                        {/*<Route path="/music" render={() => <Music/>}/>*/}
                        {/*<Route path="/settings" render={() => <Settings/>}/>*/}

                        <Route path="/friends" render={() => <Friends state={props.state}/>}/>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;











