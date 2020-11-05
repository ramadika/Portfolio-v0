import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'



import App from './App';
import Home from 'components/home'
import About from 'components/about'
import Work from 'components/work'
import BaseLayout from 'components/baselayout'

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
      </Switch>
    </BaseLayout>
    {/* <App /> */}
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
