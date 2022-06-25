import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


type AppType = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type PostType = {
    id: number
    post: string
    likescount: number
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}


const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className="appMainWrapper">
                <div className="appWrapper">
                    <Header/>
                    <Navbar/>
                    <div className="appWrapperContent">
                        <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>

                        {/*<Route path="/news" render={() => <News/>}/>*/}
                        {/*<Route path="/music" render={() => <Music/>}/>*/}
                        {/*<Route path="/settings" render={() => <Settings/>}/>*/}

                    </div>
                    {/*<Dialogs props={'any'}/>*/}
                    {/*<Profile/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;











