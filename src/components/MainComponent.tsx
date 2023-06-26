import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainComponent = () => {
	return (
		<>
			<main>
				<div className="container">
					<Outlet />
				</div>
			</main>
		</>
	)
}
