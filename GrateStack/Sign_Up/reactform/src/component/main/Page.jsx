import React, { useEffect, useRef, useState } from 'react';
import person from '../../Assets/person.png';
import email from '../../Assets/email.png';
import pwd from '../../Assets/password.png';
import './Page.css';

const Page = () => {
  const [action, setAction] = useState('Sign Up');
  const [isFormValid, setIsFormValid] = useState(false);
  const referanceOne = useRef(null);
  const referanceTwo = useRef(null);

  const handleChangeTextState = () => {
    const inputs = document.querySelectorAll('input');
    const allFilled = Array.from(inputs).every(input => input.value !== '');
    setIsFormValid(allFilled);
  };

  useEffect(() => {
    handleChangeTextState();
  }, [referanceOne, referanceTwo]);

  return (
    <div className='container sign-up'>
      <header>
              <h1>{action}</h1>
              <span className='underline'></span>
      </header>
      <form action="">
        {action === 'Sign Up' && (
          <div className="input-container">
            <img src={person} alt="" />
            <input type="text" placeholder='Name' onChange={handleChangeTextState} />
          </div>
        )}
        <div className="input-container">
          <img src={email} alt="" />
          <input type="text" placeholder='Email id' onChange={handleChangeTextState} />
        </div>
        <div className="input-container">
          <img src={pwd} alt="" />
          <input type="password" placeholder='Password' onChange={handleChangeTextState} />
        </div>
        {action === 'Login' && (
          <div className="frogrt">Forgotten password? Click here</div>
        )}
        <div className="btns">
          <button
            className={action === 'Sign Up' ? 'sign' : ''}
            onClick={(e) => { e.preventDefault(); setAction('Sign Up'); }}
            ref={referanceOne}
          >
            Sign Up
          </button>
          <button
            className={action === 'Login' ? 'sign' : ''}
            onClick={(e) => { e.preventDefault(); setAction('Login'); }}
            ref={referanceTwo}
          >
            Login
          </button>
        </div>
              {isFormValid && <div className='new'>
                  <button type="submit" className='sbt' >Submit Now</button>
              </div>}
      </form>
    </div>
  );
};

export default Page;
