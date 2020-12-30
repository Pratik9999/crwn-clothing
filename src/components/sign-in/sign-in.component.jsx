import { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends Component {

   state = {
      email: '',
      password: ''
   }

   handleSubmit = async (event) => {
      event.preventDefault();

      const { email, password } = this.state;

      try {

         await auth.signInWithEmailAndPassword(email, password); 
         this.setState({ email: '', password: '' });

      } catch(error) {
         console.log(error);
      }

   }
   
   handleChange = (event) => {
      const { value, name } = event.target; 

      this.setState({ [name] : value });   
   } 

   render() { 
      return (
         <div className="sign-in">
            <h1>I already have an account.</h1>
            <span>Sign in with email and password</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput 
                  name="email" 
                  type="email" 
                  value={this.state.email} 
                  handleChange={this.handleChange}
                  label="Email"
                  required={true}  
               />
               <FormInput 
                  name="password" 
                  type="password" 
                  value={this.state.password}
                  handleChange={this.handleChange} 
                  label="Password"  
                  required={true}  
               /> 
               <div className="buttons">
                  <CustomButton type="submit">
                     sign in
                  </CustomButton>  
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                     sign in with google
                  </CustomButton> 
               </div>
            </form>
         </div>
      );
   }
}
 
export default SignIn;