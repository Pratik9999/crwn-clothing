import SignIn from '../../components/sign-in/sign-in.component';
import SingUp from '../../components/sign-up/sign-up.component';
import './sign-in-sign-up.styles.scss';  

const SignInAndSignUpPage = () => {
   return (
      <div className="sign-in-sign-up"> 
         <SignIn />
         <SingUp /> 
      </div> 
   );
}
 
export default SignInAndSignUpPage;