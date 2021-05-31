export const userReducer = (state, action) => {
	switch(action.type) {
		case 'LOGIN_USER':
			
			return [
				{ 
                    isLoggedIn: action.isLoggedIn ,
					success: action.success,
                    email: action.email,
                    password: action.password,
                    token: action.token
                }
			];

		case 'LOG_OUT_USER':
			return state.filter(todo => todo.id !== Number(action.id));

		default:
			return state;
	}
};