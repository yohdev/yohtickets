
import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import AppBar from './AppBar';
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';

const Login = () => {
	const user = useContext(UserContext);

  // let changeHandler = (event) => {
  //   email = event.target.name;
  //   password = event.target.value;
    
  // }

  console.log(user);
  

	return (

    <div>
      <AppBar/>
      <Container fluid>
        <Row style={{marginTop:"20px"}}>
        <Col sm="12" md={{ size: 3, offset: 4 }}>
          <div style={{marginBottom: "10px"}}>
          </div>
          <Form  onSubmit={user.changeAuthStatus}>
            <FormGroup>
              <Label for="email"><strong>email</strong></Label>
              <Input autoFocus 
                type="text"
                name="email" id="email"
                value={user.email}
                placeholder="Enter email"
                autoComplete="email"
                onChange={e => user.setEmail(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password"><strong>Password</strong></Label>
              <Input type="password" 
                name="password" id="password"
                value={user.password}
                placeholder="Enter Password"
                autoComplete="password"
                onChange={e => user.setPassword(e.target.value)}
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
          </Col>
        </Row>
      </Container>
    </div>
			// <p
			// 	style={{ textAlign: 'center' }} 
			// 	onClick={changeAuthStatus}
			// >
			// 	{ isLoggedIn ? 'Admin' : 'Client'}
			// </p>
	);
};

export default Login;