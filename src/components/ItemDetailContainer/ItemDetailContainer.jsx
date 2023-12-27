import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemListDetail } from "../ItemListDetail/ItemListDetail"
import { db } from "../../config/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  const getProductsDB = () => {

      const myProducts = query(collection(db, "products"),where("id", "==", id));


      getDocs(myProducts)
                  .then ( response=>{
                    const productList = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                  setProducts(productList);
                  }
                  )
  };

  useEffect(() => {
    getProductsDB(id);
  }, [id]);



  return (
    <>
     {<ItemListDetail items={products} />}
  </>
  );
};