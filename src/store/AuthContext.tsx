import React from "react";

const AuthContext = React.createContext("");

function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	const [jwt, setJwt] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const storedJwt = localStorage.getItem("jwt");
		if (storedJwt) {
			setIsLoggedIn(true);
			setJwt(storedJwt);
		}
		setIsLoading(false);
	}, []);

	function login(token) {
		setIsLoggedIn(true);
		setJwt(token);
		localStorage.setItem("jwt", token);
	}

	function logout() {
		setIsLoggedIn(false);
		setJwt(null);
		localStorage.removeItem("jwt");
	}

	const authValue = {
		isLoggedIn,
		isLoading,
		jwt,
		login,
		logout,
	};

	return (
		// @ts-ignore
		<AuthContext.Provider value={ authValue }>
			{ children }
		</AuthContext.Provider>
	);
}

export { AuthContext, AuthProvider };
