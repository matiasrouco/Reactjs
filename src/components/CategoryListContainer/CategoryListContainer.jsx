import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";


export const CategoryListContainer = () => {
	const { category } = useParams()
	const [products, setProducts] = useState([]);

	const getProductsDB = (category) => {
		const myProducts = query(collection(db, "products"), where("category", "==", category));
		getDocs(myProducts).then((resp) => {
		  const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		  setProducts(productList);
		});
	  };


	  useEffect(() => {
		getProductsDB(category);
		
	  }, [category]);
	return (
		
		<>
			{<ItemList items={products} />}
		</>
	);
	
	
	
	
	
	
	
	// const { category } = useParams()
	// const { data, isLoading } = useFetch(`https://fakestoreapi.com/products/category/${category}`);


	
	// return (
	// 	<>
	// 		{isLoading ? <h2>Cargando Categoria...</h2> : <ItemList items={data} />}
	// 	</>
	// );
};