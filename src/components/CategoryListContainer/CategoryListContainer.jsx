import { useFetch } from "../../hooks";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


export const CategoryListContainer = () => {
    const { category } = useParams()
	const { data, isLoading } = useFetch(`https://fakestoreapi.com/products/category/${category}`);

	return (
		<>
			{isLoading ? <h2>Cargando Categoria...</h2> : <ItemList items={data} />}
		</>
	);
};