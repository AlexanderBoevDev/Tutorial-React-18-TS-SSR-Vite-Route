import { NavLink } from 'react-router-dom'

export const HeaderComponent = () => {
	return (
		<>
			<header>
				<div className="container">
					<ul>
						<li>
							<NavLink to="/" className={ ({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : '' } >
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" className={ ({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : '' } >
								About
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" className={ ({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : '' } >
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</header>
		</>
	)
}
