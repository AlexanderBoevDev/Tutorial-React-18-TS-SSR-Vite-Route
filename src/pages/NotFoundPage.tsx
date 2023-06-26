import '../scss/app.scss'
import {NavLink} from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <h1>Not Found</h1>
      <h2>Error 404</h2>
      <NavLink to="/" className={ ({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : '' } >
        Go to home
      </NavLink>
    </>
  )
}
