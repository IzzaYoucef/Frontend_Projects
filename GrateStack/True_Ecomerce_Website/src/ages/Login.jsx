import React, { useState } from 'react';
import './CssPages/Login.css';

const Login = () => {
  const [member, setMember] = useState(true);
  const allInpuuts = document.querySelectorAll('input'); 
  allInpuuts.forEach((input) => {
    input.setAttribute('required' , '')
  })

  return (
    <div className='main-container'> 
       <form action="
       ">
        <div className="login-container">
        <header>
            {
              member === true ? <h1>Login</h1> : <h1>Create acount</h1>
           }
        </header>
        <div className="inputs">
          <input type="email" placeholder='Enter your email address'  />
          
          {/* Utilisation de l'opérateur ternaire pour gérer l'affichage du champ phone number */}
          { member ? null : <input type='text' placeholder='Add your phone number' /> }

          <input type="password" placeholder='Enter your password' />
        </div>
        <button>Continue</button>
        <div className="descriptions">
          <p>
            {member 
              ? 'Already have an account?' 
              : 'Create an account?'} 
            <span onClick={() => setMember(!member)}>
              {member ? ' Click here to create' : ' Click here to login'}
            </span>
          </p>
          <main>
            <input type="checkbox" id='check' />
            <label htmlFor="check">By continuing, I agree to the terms of use & privacy policy</label>
          </main>
        </div>
      </div>
       </form>
    </div>
  );
}

export default Login;
