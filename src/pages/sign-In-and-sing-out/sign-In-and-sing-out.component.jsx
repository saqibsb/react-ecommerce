import React from 'react';
import SignIn from './../../components/sign-in/sign-in.component'
import './sign-In-and-sing-out.styles.scss';
import SignOut from '../../components/sign-out/sign-out.component';
const SignInAndSignOut = () => {
    return ( <div>
            <SignIn />
            <SignOut />
    </div> );
}
 
export default SignInAndSignOut;