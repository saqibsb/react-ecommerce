import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component' ;
import ShopPage from './pages/shop/shop.component'
import { Switch,Route,Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
// import signInAndSingOutComponent from './pages/sign-In-and-sing-out/sign-In-and-sing-out.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action'
import SignInAndSignOut from './pages/sign-In-and-sing-out/sign-In-and-sing-out.component';

class App extends React.Component {
  // state = { 
  //   currentUser:null
  //  }
   unSubscribeFromAuthor=null;
   componentDidMount() {
     const {setCurrentUser}=this.props;
     this.unSubscribeFromAuthor=auth.onAuthStateChanged(async userAuth=>{
       if(userAuth){
       const userRef= await createUserProfileDocument(userAuth);
      
       userRef.onSnapshot(snapshop=>{
         
           setCurrentUser({
             id:snapshop.id,
          ...snapshop.data()
          })
      
       })
      }
      else{
        // this.setState({currentUser:userAuth})
        setCurrentUser(userAuth);
      }
      //  this.setState({currentUser:user})
      //  console.log(user);
     })

   }
   componentWillUnmount(){
    this.unSubscribeFromAuthor();
   }
  render() { 
    return (
      <div>
      {/* currentUser={this.state.currentUser}  */}
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signIn'
          render={()=>this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignOut />)}
          />
        </Switch>
      </div>
    );
    }
}
const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(
  // null
  mapStateToProps
  ,mapDispatchToProps)(App);