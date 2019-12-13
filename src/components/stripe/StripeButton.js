import React from 'react';
import StripeCheckout from 'react-stripe-checkout'; 

const StripeButton = ({ price }) => {
    const formattedForStripe = price * 100;
    const stripeKey = 'pk_test_odOY8DQPZIp1pW56l6akAJF800b8JdfcY4';
    
    const handleToken = token => {
        console.log(token);  
        alert('Payment succeeded');
    };
    
    return (
        <StripeCheckout 
          label='Pay now'
          name= 'Ali Express'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/Cuz.svg'
          description={`Your total is $${price}`}
          amount={formattedForStripe}
          panelLabel='Pay now'
          token={handleToken}
          stripeKey={stripeKey}
        />   
    );
}

export default StripeButton;