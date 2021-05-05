import React, { Component } from 'react';
import AppBar from './AppBar';
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';
import AuthenticationService from "../AuthenticationService";

class Login extends Component {sm

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  doLogin = async (event) => {
    event.preventDefault();

    AuthenticationService
        .signin(this.state.email, 
                  this.state.password)
    //   .then(
    //     () => {
    //       this.props.history.push('/profile');
    //     },
    //     error => {
    //       console.log("Login fail: error = { " + error.toString() + " }");
    //       this.setState({error: "Can not signin successfully ! Please check email/password again"});
    //     }
    // );
  }

  render() {
    return ( 
      <div>
        <AppBar/>
        <Container fluid>
          <Row style={{marginTop:"20px"}}>
          <Col sm="12" md={{ size: 3, offset: 4 }}>
            <div style={{marginBottom: "10px"}}>
            </div>
            <Form  onSubmit={this.doLogin}>
              <FormGroup>
                <Label for="email"><strong>email</strong></Label>
                <Input autoFocus 
                  type="text"
                  name="email" id="email"
                  value={this.state.email}
                  placeholder="Enter email"
                  autoComplete="email"
                  onChange={this.changeHandler}
                />
              </FormGroup>

              <FormGroup>
                <Label for="password"><strong>Password</strong></Label>
                <Input type="password" 
                  name="password" id="password"
                  value={this.state.password}
                  placeholder="Enter Password"
                  autoComplete="password"
                  onChange={this.changeHandler}
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
      </div>);
  }
}

export default Login;