import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { checkUserSession } from './store/user/userActions'
import { selectCurrentUser } from './store/user/userSelector';
import './App.css';

//components
import Home from './pages/home/Home';
import Header from './components/header/Header';
import ShopPage from './pages/shop/Shop'; 
import SignupSignin from './pages/sign-in-and-sign-up/SigninSignup'
import Checkout from './pages/checkout/Checkout';

class App extends React.Component  {

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  };

render() {
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
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignupSignin />
              )
            }
          />
      </Switch>
    </div>
  );
}
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state), 
});

export default connect(
  mapStateToProps,
  { checkUserSession }
)(App);
