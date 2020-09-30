import React, { useEffect } from 'react';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  // Piece of code which runs baed on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
    return () => {
      // Cleanup operations go in here
      unsubscribe();
    }
  }, []);

  console.log("USER IS >>>", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
