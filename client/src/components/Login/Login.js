import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import './Login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken, setRole }) {
  const [email, setUserEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
    setRole(token.role);
  }

  return(
    <Container maxWidth="sm">
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="email" onChange={e => setUserEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
        <Button variant="contained" type="submit">Submit</Button>
        </div>
      </form>
    </div>
    </Container>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}