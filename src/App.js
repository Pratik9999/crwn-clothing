import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'; 
import './App.css';

const Hats = () => {
   return (
      <h1>Hats Page</h1> 
   );
}

const App = () => {
   return (
      <div>
         <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/hats" component={Hats} />  
         </Switch>
      </div> 
   );
}
 
export default App;