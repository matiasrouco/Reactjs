import { NavLink } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

export const NavBar = () => {
    const { totalProducts } = useContext(GlobalContext);

  return (
    <nav className="container mt-2 d-flex ">
        <NavLink to="/">
            <button className="btn btn-dark mx-2">Home</button>
        </NavLink>
        
        <NavLink to="category/men's clothing">
            <button className="btn btn-dark mx-2">Hombre</button>
        </NavLink>
        <NavLink to="category/women's clothing">
            <button className="btn btn-dark mx-2">Mujer</button>
        </NavLink>
        <NavLink to="category/electronics">
            <button className="btn btn-dark mx-2">Electronica</button>
        </NavLink>
        <NavLink to="/cart">
            <button className="btn btn-dark float-right">Carrito  {totalProducts} </button>
        </NavLink>
    </nav>
    
  )
}
