import { createContext, useState } from "react";
const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(
		sessionStorage.getItem("token") !== null
	);

	const loginHandler = (idToken) => {
		setIsLoggedIn(true);
		sessionStorage.setItem("token", idToken);
	};

	return (
		<AuthContext.Provider
			value={{
				loggedIn: isLoggedIn,
				setLoggedIn: setIsLoggedIn,
				login: loginHandler,
				logout: () => setIsLoggedIn(false),
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
