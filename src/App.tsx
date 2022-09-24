import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Navbar/Friends/Friends';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsType, RootStateType, StoreType} from './redux/state';


type AppType = {
    store: StoreType
    state: RootStateType,
    dispatch: (action: ActionsType) => void
}


const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className="appMainWrapper">
                <div className="appWrapper">
                    <Header/>
                    <Navbar/>
                    <div className="appWrapperContent">
                        <Route path="/dialogs" render={() => <Dialogs store={props.store}/>}/>
                        <Route path="/profile"
                               render={() => <Profile state={props.state} dispatch={props.dispatch} message={props.state.profilePage.messageForNewPost}/>}/>
                        <Route path="/friends" render={() => <Friends state={props.state}/>}/>

                        {/*<Route path="/news" render={() => <News/>}/>*/}
                        {/*<Route path="/music" render={() => <Music/>}/>*/}
                        {/*<Route path="/settings" render={() => <Settings/>}/>*/}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;











