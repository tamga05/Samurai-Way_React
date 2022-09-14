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
import {HashRouter, Route} from 'react-router-dom';
import {ActionsType, RootStateType} from './redux/state';


type AppType = {
    state: RootStateType,
    dispatch: (action: ActionsType) => void
}


const App = (props: AppType) => {
    return (
        <HashRouter>
            <div className="appMainWrapper">
                <div className="appWrapper">
                    <Header/>
                    <Navbar/>
                    <div className="appWrapperContent">
                        <Route path="/dialogs" render={() => <Dialogs state={props.state}/>}/>
                        <Route path="/profile"
                            // render={() => <Profile state={props.state} message={props.state.profilePage.messageForNewPost} addPost={props.addPost}
                            //                        changeNewText={props.changeNewText}/>}/>
                               render={() => <Profile state={props.state} message={props.state.profilePage.messageForNewPost} dispatch={props.dispatch}/>}/>

                        {/*<Route path="/news" render={() => <News/>}/>*/}
                        {/*<Route path="/music" render={() => <Music/>}/>*/}
                        {/*<Route path="/settings" render={() => <Settings/>}/>*/}

                        <Route path="/friends" render={() => <Friends state={props.state}/>}/>
                    </div>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;











