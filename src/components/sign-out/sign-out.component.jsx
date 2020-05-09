import React, { Component } from 'react';

import {auth,createUserProfileDocument} from './../../firebase/firebase.utils'

import './sign-out.styles.scss'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../Custom-button/custom-button.component';
class SignOut extends Component {
    state = { 
        dislpalyName:'',
        email:'',
        password:'',
        confirmPassword:''
     }
     handleChange=(event)=>{
        const {value,name}=event.target;
         this.setState({[name]:value})
     }
     handleSubmit = async event=>{
         event.preventDefault();
         const {dislpalyName,email,confirmPassword,password}=this.state;
        if(password !== confirmPassword){
            alert("Password Does not Match");
            return;
        }
       
        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{dislpalyName})
            this.setState({
                dislpalyName:'',
                email:'',
                password:'',
                confirmPassword:''
               
            })

        }
        catch(error){
            console.error(error);
        }
     }

    render() { 
        const {dislpalyName,email,confirmPassword,password}=this.state;
        return ( 
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your Email and Password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                     type='text' 
                     name='dislpalyName'
                      value={dislpalyName}
                       onChange={this.handleChange}
                      required
                        label='Display Name'
                      />
                 <FormInput
                     name='email'
                      type='email' 
                      value={email}
                       onChange={this.handleChange}
                      required
                        label='Email'
                      />
                <FormInput
                     name='password'
                      type='password' 
                      value={password}
                       onChange={this.handleChange}
                      required
                        label='Password'
                      />
                <FormInput
                name='confirmPassword'
                type='password' 
                value={confirmPassword}
                onChange={this.handleChange}
                required
                label='Confirm  Password'
                />
                      <div className='buttons'>
                        <CustomButton type='submit'>Sign Out</CustomButton>
                        </div>
                </form>
            </div>
         );
    }
}
 
export default SignOut;