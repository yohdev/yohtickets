
import React, { createContext, useState, useReducer } from 'react';
import { userReducer } from '../reducers/UserReducer';
import AuthenticationService from '../api/AuthenticationService';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

	const [ user, dispatch ] = useReducer(userReducer, [{ 
			isLoggedIn: false ,
			success: false,
			email: '',
			password: '',
			token: ''
		}
	]);


	// const changeAuthStatus = e => {
	// 	e.preventDefault();

	// 	// AuthenticationService.signin(email, setPassword);
	// };

	return(
		<UserContext.Provider value={{ user, dispatch }} >
			{ children }
		</UserContext.Provider>
	);
}

export default UserContextProvider;