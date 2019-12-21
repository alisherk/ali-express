import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/user/userActions';
import './sign-up.styles.scss';

const SignUp = () => {

  const [userCreds, setCreds] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const dispatch = useDispatch();

  const { displayName, email, password, confirmPassword } = userCreds;

  const handleSubmit = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    dispatch(actions.signUpStart({ email, password, displayName }));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCreds({...userCreds, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          autoComplete='off'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          autoComplete='off'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
