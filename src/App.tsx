import React from 'react';
import './App.css';
import Header, {HeaderLink} from './Header';
import Technologies, {TechnologiesScills} from "./Technologies";
import Footer from "./Footer";


const myScills: Array<TechnologiesScills> = [
    {id: 1, span: "HTML"},
    {id: 2, span: "CSS"},
    {id: 3, span: "JS"},
    {id: 4, span: "React"}
]

const Navigation: Array<HeaderLink> = [
    {id: 5, span: 'Home'},
    {id: 6, span: 'News Feed'},
    {id: 7, span: 'Messages'}
]

const App = () => {
    return (
        <div className="App">
            <Header navLink={Navigation}/>
            <Technologies scills={myScills}/>
            <Footer text={'it-kamasutra.com footer'}/>
        </div>
    );
}

export default App;











