import React, { Component } from 'react';   
import {signInWithGoogle} from './../../firebase/firebase.utils'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../Custom-button/custom-button.component';
class SignIn extends Component {
    state = { 
        email:'',
        password:''
     }  
     handleChange=(event)=>{
        const {value,name}=event.target;
         this.setState({[name]:value})
     }
     handleSubmit=event=>{
         event.preventDefault();
         this.setState({email:'',password:''})
     }
    render() { 
        return ( 
        <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign-In With your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name='email'
                    type='email'
                    value={this.state.email} 
                    handleChange={this.handleChange}
                     required
                     label='Email'    
                     />
                    
                    <FormInput
                     name='password'
                      type='password' 
                      value={this.state.password}
                       onChange={this.handleChange}
                      required
                        label='Password'
                      />
                      <div className='buttons'>
                        <CustomButton type='submit'>SignIn</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}SignIn With Google{' '}</CustomButton>
                    </div>
                </form>
            </div>
         );
    }
}
export default SignIn;