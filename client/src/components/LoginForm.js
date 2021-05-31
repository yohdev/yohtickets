import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';

const LoginForm = () => {

    const { user, dispatch } = useContext(UserContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    let [ data, setData ] = useState('');
    const [ success, seSuccess ] = useState(false);
    
    //handle field changes
    const handleEmailChange = e => {
      setEmail(e.target.value);
      
    };

    const handlePassChange = e => {
      setPassword(e.target.value);
    }

    //onSubmit
    const handleFormSubmit = e => {
      e.preventDefault();

      const promise = Auth();
      const promise2 = promise.then(() => {

        setData(data = {
          email: email,
          password: password
        });

      }).then(() => {

        dispatch({ 
          type: 'LOGIN_USER', 
          isLoggedIn: true, 
          email: email,
          password: password,
          token: 'token'
        });

        console.log(data);
        
      })
      
      async function Auth() {

        try {
          setEmail(e.target.value);
          setPassword(e.target.value);

        } catch (error) {
          console.log('err')
        }
      }
    };
    
return (
  <Form onSubmit={handleFormSubmit}>
  <FormGroup>
    <Label for="email"><strong>email</strong></Label>
    <Input autoFocus 
      type="text"
      name="email" id="email"
      placeholder="Enter email"
      autoComplete="email"
      onChange={handleEmailChange}
    />
  </FormGroup>

  <FormGroup>
    <Label for="password"><strong>Password</strong></Label>
    <Input type="password" 
      name="password" id="password"
      placeholder="Enter Password"
      autoComplete="password"
      onChange={handlePassChange}
    />
  </FormGroup>

  <Button type="submit" variant="primary" size="lg" block>
    Sign In
  </Button>
{/* {
  this.state.error && (
    <Alert color="danger">
      {this.state.error}
    </Alert>
  )
} */}
</Form>
);

};

export default LoginForm;

