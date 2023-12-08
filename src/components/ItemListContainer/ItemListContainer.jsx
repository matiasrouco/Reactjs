import { useCount, useFetch } from "../../hooks";
import { Button } from "../Button/Button";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {

	const { data, isLoading } = useFetch(`https://fakestoreapi.com/products`);

	return (
		<>
			{isLoading ? <h2>Cargando Productos...</h2> : <ItemList items={data} />}
		</>
	);
};
