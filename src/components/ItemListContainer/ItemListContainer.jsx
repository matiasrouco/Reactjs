import { ItemList } from "../ItemList/ItemList";
import { db } from "../../config/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";
import { useState, useEffect } from "react";

export const ItemListContainer = () => {


	const [products, setProducts] = useState([]);

	const getProductsDB = () => {
		const myProducts = query(collection(db, "products"));
		getDocs(myProducts).then((resp) => {
		  const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		  setProducts(productList);
		});
	  };


	  useEffect(() => {
		getProductsDB();
		
	  }, []);
	return (
		
		<>
			{<ItemList items={products} />}
		</>
	);
};
