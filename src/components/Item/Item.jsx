import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { useCount } from "../../hooks/useCount";
import { useContext} from "react";
import { GlobalContext } from "../../context/GlobalContext";


export const Item = ({ title, image, category, id, price }) => {
	const { handleAddProductCart } = useContext(GlobalContext);

	const { increment, decrement, count } = useCount(0, 55);


	return (
		<div className="border border-3 m-1">
			<p className="text-wrap">
				Nombre: {title}{" "}
			</p>
			<img src={image} alt="foto" width="150px" />
			<p>Categoria: {category} </p>
			<Link to={`/products/${id}`}>
				<Button text="Detalle" variant="btn-dark"></Button>
			</Link>
			<div >
				<div>
					
					
					<button
						className="btn btn-outline-secondary mx-3"
						onClick={decrement}
					>
						-
					</button>
					<strong>{count}</strong>
					<button
						className="btn btn-outline-secondary mx-3"
						onClick={increment}
					>
						+
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
