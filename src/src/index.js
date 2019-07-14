import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

const AppRouter = () => {
  return (
    <Router>
      <CssBaseline />
      <Nav />
      <Route path="/" exact component={Home} />
      <Footer />
    </Router>
  );
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();