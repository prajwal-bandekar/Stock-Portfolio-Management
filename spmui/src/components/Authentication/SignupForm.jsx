import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Styles/Signup.css'
import { useState } from 'react';
import axios from 'axios'


function SignupForm() {

    let [name, setName] = useState(null);
    let [email, setEmail] = useState(null);
    let [phone, setPhone] = useState(null);
    let [password, setPassword] = useState(null);

    let data = {name, email, phone, password};

    // Add a Function to handle the Submit click
    let handleSubmit=(e)=>{
        e.preventDefault()

        if(name && email && phone && password){
            axios
            .post('http://localhost:8080/advisor', data)
            .then((res)=>{
                alert("Advisor Account Created Sucessfully")
                console.log(res)
            })
            .catch((err)=>{
                console.log(err);
                alert("Something went wrong")
            })
        }

        else {
            alert("Please fill all the fields in the form")
        }
        
    }


  return (
    <div className='mt-5 w-25 box'>
     <Form>
        
    <Form.Group className="mb-3 font-weight-bold" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Full Name" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3 font-weight-bold" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3 font-weight-bold" controlId="formBasicName">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" placeholder="Enter your Phone number" pattern="[6-9]\d{9}" required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3 font-weight-bold" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I have read and agree to the terms and services" />
      </Form.Group>

      <Button className='ml-5' variant="primary" type="submit" onClick={handleSubmit}>
        Create Free Account
      </Button>

    </Form>
    </div>
   
  );
}

export default SignupForm;