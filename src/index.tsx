import React from 'react';
import './index.css';
import App from './App';
import state from './redux/state';
import {renderTree} from './render';


//addPost('Hello, Andrey !!!');


renderTree(state);

export default App;
