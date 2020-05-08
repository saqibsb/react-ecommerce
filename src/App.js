import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component' ;
import ShopPage from './pages/shop/shop.component'
import { Switch,Route } from 'react-router-dom';
import Header from './components/header/header.component';
import signInAndSingOutComponent from './pages/sign-In-and-sing-out/sign-In-and-sing-out.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  state = { 
    currentUser:null
   }
   unSubscribeFromAuthor=null;
   componentDidMount() {
     this.unSubscribeFromAuthor=auth.onAuthStateChanged(user=>{
       this.setState({currentUser:user})
       console.log(user);
     })
   }
   componentWillUnmount(){
    this.unSubscribeFromAuthor();
   }
  render() { 
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={signInAndSingOutComponent} />
        </Switch>
      </div>
    );
    }
}
 
export default App;