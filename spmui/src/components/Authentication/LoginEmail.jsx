import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Styles/LoginEmail.css'
import axios from 'axios'

const LoginEmail = () => {

let [email,setEmail] = useState(null);
let [password, setPassword] = useState(null);

const handleLogin=()=>
{
axios
.post('http://localhost:8080/advisor/login-via-email')
}

  return (
    <>
    <div className='mt-5 w-25 box'>
     <Form>
        
      <Form.Group className="mb-3 font-weight-bold" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3 font-weight-bold" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me Signed in" />
      </Form.Group>

      <Button id="buttonLogin" variant="primary " type="submit" onClick={handleLogin}>
        Sign in
      </Button>

    </Form>
    </div>
    </>
  )
}

export default LoginEmail