import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const ItemDetail = ({ title, category, price, image, description }) => {
  return (
    <div className="p-5 border border-3 rounded-4">
      <div className="d-flex justify-content-center">
        <img src={image} alt="" />
      </div>
      <div className="d-flex flex-column">
        <p>Nombre: {title} </p>
        <p>Categoria: {category} </p>
        <p>Genero: {description} </p>
        <p>Precio: {price} </p>
      </div>
      <Link to={"/"}>
        <Button text="Volver" variant="btn-dark" />
      </Link>
    </div>
  );
};
