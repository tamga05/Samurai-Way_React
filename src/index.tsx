import React from 'react';
import './index.css';
import {store} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';


const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            {/*<App state={store.getState()} addPost={store.addPost.bind(store)} changeNewText={store.changeNewText.bind(store)}/>*/}
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

renderTree();

store.subscribe(renderTree);