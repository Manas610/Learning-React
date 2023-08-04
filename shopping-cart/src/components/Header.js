import { Link , NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import "./Header.css"

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
        <span>Shopping cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>cart:2</span>
      </Link>
    </header>
  )
}
