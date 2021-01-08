import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51I7Es0IC14v8Ud2D5VlpmbRQvj7xNm9fIUR92BcEEhgRMKRwy0jMokBk0JnLE9sMkD1oEjCkRMoU7NvYVTQe7Wmk00rjkejyPt';

   const onToken = token => {
      console.log(token)
      alert('Payment Succesfull');
   }

   return ( 
      <StripeCheckout 
         label="Pay Now"
         name="CRWN Clothing Ltd."
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
      />
   );
}
 
export default StripeCheckoutButton;