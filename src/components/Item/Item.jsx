import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const Item = ({ title, image, category, id}) => {
  return (
    <div className="border border-3 p-3 d-flex flex-column m-2">
      <p>Nombre: {title}</p>
      <img src={image} alt="foto" />
      <p>Categoria: {category} </p>
      <Link to={`products/${id}`}>
        <Button text="Detalle" variant="btn-dark" ></Button>
      </Link>
    </div>
  );
};
