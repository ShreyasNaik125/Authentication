import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    axios.post("http://localhost:3000/register", {
      name: name,
      email: email,
      password: password,
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className='Register'>
      <h1>Register</h1>
      <p>Name</p>
      <input
        type="text"
        placeholder='Enter Your Name ...'
        autoComplete='off'
        onChange={(e) => setName(e.target.value)}
      /><br />
      <p>Email</p>
      <input
        type="email"
        placeholder='Enter Your Email ...'
        autoComplete='off'
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <p>Password</p>
      <input
        type="password"
        placeholder='Enter Your Password ...'
        autoComplete='off'
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />
      <Link to="/login">Already have an account? try logging in</Link>
      <div className="center">
        <button onClick={handleClick}>Sign Up</button>
      </div>
    </div>
  );
}

export default Register;