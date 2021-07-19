import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
      return (
        <nav className='nav'>
          <p onClick={() => onRouteChange('signedout')} className='f3 link dim black pointer underline pa3 '>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav className='nav'>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black pointer underline pa3 '>Sign in</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black pointer underline pa3 '>Register</p>
        </nav>
      );
    }
}

export default Navigation;