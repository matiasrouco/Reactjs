import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useCount } from "../../hooks/useCount";

export const ItemDetail = ({
	title,
	category,
	price,
	image,
	description,
	rating,
	id,
}) => {
	const { handleAddProductCart } = useContext(GlobalContext);
	const { increment, decrement, count } = useCount(0, 55);

	return (
		<div className="border border-3 m-1">
			<div className="d-flex justify-content-center">
				<img src={image} alt="" width="250px"/>
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
			<div >
				<div>
					<button
						className="btn btn-outline-secondary mx-3"
						onClick={decrement}> - </button>
				</div>
				<strong>{count}</strong>
				<button className="btn btn-outline-secondary mx-3" onClick={increment}>	+	</button>
				<button
					className="btn btn-outline-primary mt-2"
					onClick={() =>
						handleAddProductCart({ id, title, image, price }, count)
					}> Agregar al carrito </button>
			</div>
		</div>
	);
};
