import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import GetDeck from './components/Deck-Get';
import GetCard from './components/Card-Get';
// import UsersList from './components/UsersList';
// import User from './components/User';
import { authenticate } from './store/session';
import SingleDeck from './components/Deck-Inside';
import SingleCard from './components/Card-Inside';
import Splashpage from './components/Splash';
// import Homepage from './components/Homepage';
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/splash' exact={true}>
          <Splashpage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        {/* <ProtectedRoute path='/' exact={true} >
          <Homepage />
        </ProtectedRoute> */}
        <ProtectedRoute path='/decks' exact={true}>
          <GetDeck />
        </ProtectedRoute>
        <ProtectedRoute path='/decks/:id' exact={true}>
          <SingleDeck />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true}>
          <GetCard/>
        </ProtectedRoute>
        <ProtectedRoute path='/cards/:id' exact={true}>
          <SingleCard/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
