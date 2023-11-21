import { useCount, useFetch } from "../../hooks";
import { Button } from "../Button/Button";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
	const { count, increment, decrement } = useCount(1);
	const { data, isLoading } = useFetch(`https://fakestoreapi.com/products`);

	return (
		<>
			{isLoading ? <h2>Cargando Productos...</h2> : <ItemList items={data} />}
			{/* Condicionamos el renderizado del componente Button */}
			{/* {count > 1 && <Button text="Atrás" functionClick={decrement} />}
      <strong> Página {count} </strong>
      <Button text="Siguiente" functionClick={increment} /> */}
		</>
	);
};
