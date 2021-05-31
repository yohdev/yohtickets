
import React, { useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import AppBar from './AppBar';
import { Container } from 'reactstrap';
import { Row, Col } from "reactstrap";
import LoginForm from './LoginForm';
import {Button} from 'react-bootstrap';

const Login = () => {

  const { user } = useContext(UserContext);

  // let changeHandler = (event) => {
  //   email = event.target.name;
  //   password = event.target.value;
    
  // }

  // console.log(user);

  useEffect(() => {
    if( user[0].success){
      console.log(user[0].success + ' user logged in');
    } else {
      console.log('not logged in')
    }
    // localStorage.setItem("user", JSON.stringify(action.payload.user));
  })
  

	return (

    <div>
      <AppBar/>
      <Container fluid>
        <Row style={{marginTop:"20px"}}>
        <Col sm="12" md={{ size: 3, offset: 4 }}>
          <div style={{marginBottom: "10px"}}>
          </div>
              <LoginForm />
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