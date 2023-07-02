import React from 'react'
import { Outlet } from 'react-router-dom'

import '../scss/MainComponent.scss'

export const MainComponent = () => {
	return (
		<>
			<main>
				<Outlet />
			</main>
		</>
	)
}
