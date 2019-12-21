import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/userActions';
import './App.css';

//components
import Home from './pages/home/Home';
import Header from './components/header/Header';
import ShopPage from './pages/shop/Shop';
import SignupSignin from './pages/sign-in-and-sign-up/SigninSignup';
import Checkout from './pages/checkout/Checkout';

const App = props => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  const currentUser = useSelector(state => state.currentUser);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={Checkout} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SignupSignin />)}
        />
      </Switch>
    </div>
  );
};

export default App;
