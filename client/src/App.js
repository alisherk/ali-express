import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { checkUserSession } from './store/user/userActions';
import { GlobalStyle } from './global.styles';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './store/user/userSelector';
import Spinner from './components/spinner/Spinner';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

//components
import Header from './components/header/Header';
const Home = lazy(() => import('./pages/home/Home'));
const ShopPage = lazy(() => import('./pages/shop/Shop'));
const SignupSignin = lazy(() =>
  import('./pages/sign-in-and-sign-up/SigninSignup')
);
const Checkout = lazy(() => import('./pages/checkout/Checkout'));

const App = ({ user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={Checkout} />
            <Route
              exact
              path='/signin'
              render={() => (user ? <Redirect to='/' /> : <SignupSignin />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

export default connect(mapStateToProps)(App);
