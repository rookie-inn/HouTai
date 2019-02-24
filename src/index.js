import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router,Route,Redirect} from "react-router"
import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// import {BrowserRouter as Router,Router,Route,Link} from "react-router-dom"
// import index from "pages/index"
ReactDOM.render(

    <App/>,document.getElementById('root')
)
serviceWorker.unregister();
