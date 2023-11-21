import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="container mt-2 d-flex ">
        <NavLink to="/">
            <button className="btn btn-dark mx-2">Home</button>
        </NavLink>
        
        <NavLink to="/category/men's clothing">
            <button className="btn btn-dark mx-2">Hombre</button>
        </NavLink>
        <NavLink to="/category/women's clothing">
            <button className="btn btn-dark mx-2">Mujer</button>
        </NavLink>
        <NavLink to="/cart">
            <button className="btn btn-dark mx-2">Carrito</button>
        </NavLink>
    </nav>
  )
}
