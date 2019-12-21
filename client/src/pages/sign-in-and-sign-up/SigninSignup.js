
import React from 'react';

import SignIn from '../../components/sign-in/Signin';
import SignUp from '../../components/sign-up/Signup';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;