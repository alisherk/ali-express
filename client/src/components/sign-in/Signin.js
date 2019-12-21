import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import * as actions from '../../store/user/userActions';
import { useDispatch } from 'react-redux';
import './sign-in.styles.scss';

const SignIn = props => {
  const [userCreds, setCreds] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const { email, password } = userCreds;

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(actions.emailSignInStart({ email, password }));
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCreds({ ...userCreds, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
          autoComplete='off'
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
          autoComplete='off'
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton
            type='button'
            onClick={() => dispatch(actions.googleSignInStart())}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
