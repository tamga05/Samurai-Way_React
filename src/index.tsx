import React from 'react';
import './index.css';
import state, {subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';


const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}


renderTree();

subscribe(renderTree);