import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';


// addPost('Hello, Andrey !!!')


ReactDOM.render(<App state={state}/>, document.getElementById('root'));

export default App;
