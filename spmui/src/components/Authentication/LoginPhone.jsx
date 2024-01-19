import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Styles/LoginEmail.css'

const LoginPhone = () => {

    let [phone,setPhone] = useState(null);
    let [password, setPassword] = useState(null);

  return (
    <>
     <div className='mt-5 w-25 box'>
     <Form>

      <Form.Group className="mb-3 font-weight-bold" controlId="formBasicName">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" placeholder="Enter your Phone number" pattern="[6-9]\d{9}" required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3 font-weight-bold" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me Signed in" />
      </Form.Group>

      <Button id="buttonLogin" variant="primary " type="submit" >
        Sign in
      </Button>


    </Form>
    </div>
    </>
  )
}

export default LoginPhone