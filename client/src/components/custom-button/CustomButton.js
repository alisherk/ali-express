import React from 'react';
import { CustomBtnContainer } from './custom-button.styles';

const CustomButton = props => (
  <CustomBtnContainer {...props}>
    {props.children}
  </CustomBtnContainer>
);

export default CustomButton;