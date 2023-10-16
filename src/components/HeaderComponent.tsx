import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { AuthProvider, AuthContext } from "../store/AuthContext";
import { Link } from "react-router-dom";
import "../scss/HeaderComponent.scss";
import siteLogo from "../assets/react.svg";

export const HeaderComponent:React.FC = () => {
	// @ts-ignore
	const { isLoggedIn, logout } = React.useContext(AuthContext);
	const logo = (
		<NavLink to="/">
			<img alt="logo" src={siteLogo} height="40" className="mr-2"/>
		</NavLink>
	)

	const navigate = useNavigate();

	const items = [
		{
			label: "Home",
			command: () => { navigate("/") },
		},
		{
			label: "Posts",
			command: () => { navigate("/posts") },
		},
		{
			label: "About",
			command: () => { navigate("/about") },
		},
		{
			label: "User",
			icon: "pi pi-fw pi-user",
			className: "p-menuitem--user",
			items: [
				{
					label: "Add user",
					icon: "pi pi-fw pi-plus",
					command: () => { navigate("/add-user") },
				},
				{
					label: "My Profile",
					icon: "pi pi-fw pi-user",
					command: () => { isLoggedIn ? navigate("/user") : navigate("/login") },
				},
				{
					label: "Users list",
					icon: "pi pi-fw pi-users",
					command: () => { navigate("/users") },
				},
				{
					label: "Add post",
					icon: "pi pi-fw pi-file",
					command: () => { navigate("/add-post") },
				},
				{
					separator: true
				},
				{
					label: "Sign in",
					icon: "pi pi-fw pi-sign-in",
					command: () => { !isLoggedIn ? navigate("/login") : "" },
				},
				{
					label: "Recover password",
					icon: "pi pi-fw pi-lock-open",
					command: () => { !isLoggedIn ? navigate("/password") : "" },
				},
				// {
				// 	label: "Sign out",
				// 	icon: "pi pi-fw pi-sign-out",
				// }
			]
		}
	];

	console.log(items)

	return (
		<header>
			<div className="container-fluid container-xxl">
				<Menubar model={ items } start={ logo } end={<Button label="Logout" onClick={ logout } icon="pi pi-fw pi-sign-out"/>}/>
			</div>
		</header>
	)
}
