
import React from 'react';
import AppBar from './AppBar';
import { Container } from 'reactstrap';
import { Row, Col } from "reactstrap";
import LoginForm from './LoginForm';
import {Button} from 'react-bootstrap';

const Login = () => {
	// const user = useContext(UserContext);

  // let changeHandler = (event) => {
  //   email = event.target.name;
  //   password = event.target.value;
    
  // }

  // console.log(user);
  

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