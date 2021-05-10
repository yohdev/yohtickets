
import React, { createContext, useState } from 'react';
import AuthenticationService from '../AuthenticationService';

export const UserContext = createContext();

const UserContextProvider = (props) => {

	const [isLoggedIn, setisLoggedIn] = useState(false);
	const [email, setEmail ] = useState('');
	const [password, setPassword ] = useState('');


	const changeAuthStatus = () => {
	setEmail(email);
	setPassword(password);
		setisLoggedIn(!isLoggedIn);
		AuthenticationService.signin(email, setPassword);
	};

	return(
		<UserContext.Provider value={{ isLoggedIn, email, password, changeAuthStatus, setEmail, setPassword }} >
			{ props.children }
		</UserContext.Provider>
	);
}

export default UserContextProvider;