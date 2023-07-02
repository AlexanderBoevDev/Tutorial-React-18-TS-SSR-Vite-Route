import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'

import '../scss/HeaderComponent.scss'
import siteLogo from '../assets/react.svg'

export const HeaderComponent = () => {

	const logo = (
		<NavLink to="/">
			<img alt="logo" src={siteLogo} height="40" className="mr-2"/>
		</NavLink>
	)
	const navigate = useNavigate();
	const items = [
		{
			label: 'Home',
			command: () => { navigate('/') },
		},
		{
			label: 'Posts',
			command: () => { navigate('/posts') },
		},
		{
			label: 'About',
			command: () => { navigate('/about') },
		},
		{
			label: 'Contact',
			command: () => { navigate('/contact') },
		},
		{
			label: 'User',
			icon: 'pi pi-fw pi-user',
			className: 'p-menuitem--user',
			items: [
				{
					label: 'Add post',
					icon: 'pi pi-fw pi-plus',
				},
				{
					label: 'Settings',
					icon: 'pi pi-fw pi-user-edit',
				},
				{
					label: 'Register',
					icon: 'pi pi-fw pi-user-plus'
				},
				{
					separator: true
				},
				{
					label: 'Sign in',
					icon: 'pi pi-fw pi-sign-in'
				},
				{
					label: 'Sign out',
					icon: 'pi pi-fw pi-sign-out'
				}
			]
		}
	];

	return (
		<header>
			<div className="container-fluid container-xxl">
				<Menubar model={items} start={logo} />
			</div>
		</header>
	)
}
