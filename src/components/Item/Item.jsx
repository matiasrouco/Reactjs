import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { useCount } from "../../hooks/useCount";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Item = ({ title, image, category, id, price }) => {
	const { handleAddProductCart } = useContext(GlobalContext);

	const { increment, decrement, count } = useCount(0, 55);

	return (
		<div className="border border-3 m-1" width="150px">
			<p className="text-wrap" width="100px">
				Nombre: {title}{" "}
			</p>
			<img src={image} alt="foto" width="150px" />
			<p>Categoria: {category} </p>
			<Link to={`/products/${id}`}>
				<Button text="Detalle" variant="btn-dark"></Button>
			</Link>
			<div className="d-flex flex-column col-2 justify-content-center align-content-center border border-3 border-primary rounded-3 p-4">
				<div>
					<button
						className="btn btn-outline-secondary mx-3"
						onClick={increment}
					>
						+
					</button>
					<strong>{count}</strong>
					<button
						className="btn btn-outline-secondary mx-3"
						onClick={decrement}
					>
						-
					</button>
				</div>
				<button
					className="btn btn-outline-primary mt-2"
					onClick={() =>
						handleAddProductCart({ id, title, image, price }, count)
					}
				>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};
