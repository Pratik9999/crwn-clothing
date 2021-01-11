import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import Header from './components/header/header.component'; 
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserprofileDocument } from './firebase/firebase.utils';
import setCurrentUser from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';

class App extends Component {

   unsubscribeFromAuth = null;

   componentDidMount() {

      const { setCurrentUser } = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { 
         if(userAuth) {
            const userRef = await createUserprofileDocument(userAuth); 

            userRef.onSnapshot(snapshot => {
               setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data()
               })
            });
         }

         setCurrentUser(userAuth);
           
      })
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div>
            <Header /> 
            <Switch>
               <Route exact path="/" component={HomePage} /> 
               <Route path="/shop" component={ShopPage} />  
               <Route exact path="/checkout" component={CheckoutPage} /> 
               <Route 
                  path="/signin" 
                  render={ () => this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage /> } 
               />   
            </Switch>
         </div> 
      );
   }
}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser   
});

const mapDispatchToProps = (dispatch) => {
   return { 
      setCurrentUser: (user) => dispatch(setCurrentUser(user))
   }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);  