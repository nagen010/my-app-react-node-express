import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form';
import Output from './Output';
import registerServiceWorker from './registerServiceWorker';
import CommentBox from './CommentBox';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Form />, document.getElementById('form'));
ReactDOM.render(<CommentBox />, document.getElementById('comment'));
ReactDOM.render(<Output />, document.getElementById('output'));
registerServiceWorker();
