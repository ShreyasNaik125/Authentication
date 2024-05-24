import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleClick = () =>{
      const data = {email:email,password:password}
      console.log(data)
      axios.post('http://localhost:3000/login',data)
      .then(response => {
        const result = response.data.message
        alert(result)
      })
    }

  return (
    <div className='Login'>
      <h1>Login</h1>
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
      <Link to="/">Create an account ? try Signing up</Link>
      <div className="center">
        <button onClick={handleClick}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login