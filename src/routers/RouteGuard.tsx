import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

// @ts-ignore
export const RouteGuard:React.FC = ({ children }) => {
	// @ts-ignore
	const { isLoggedIn, isLoading } = React.useContext(AuthContext);
	// const { isLoggedIn } = React.useContext(AuthContext);

	// if (isLoading) {
	// 	return <></>;
	// }
	if (!isLoggedIn) {
		return <Navigate to="/login" />;
	}
	return children;
}
