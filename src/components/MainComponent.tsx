import React from "react";
import { Outlet } from "react-router-dom";
import "../scss/MainComponent.scss";

export const MainComponent:React.FC = () => {
	return (
		<main>
			<Outlet />
		</main>
	)
}
