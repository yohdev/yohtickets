import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';

const LoginForm = () => {

    const { user, dispatch } = useContext(UserContext);
    
    // console.log(user)

    const handleChange = e => {

    };


    const handleFormSubmit = e => {
      e.preventDefault();
      console.log(e)

      dispatch({ 
        type: 'LOGIN_USER', 
        isLoggedIn: true, 
        email: 'email',
        password: 'password',
        token: 'token'
      });
      
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
      onChange={handleChange}
    />
  </FormGroup>

  <FormGroup>
    <Label for="password"><strong>Password</strong></Label>
    <Input type="password" 
      name="password" id="password"
      placeholder="Enter Password"
      autoComplete="password"
      onChange={handleChange}
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

