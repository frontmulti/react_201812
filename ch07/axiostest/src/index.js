import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

axios.get("/contacts", {
    params : { pageno:1, pagesize:5 }
})
.then((response)=> {
    console.log(response);
})
.catch((error) => {
    console.log("에러 : ", error);
});