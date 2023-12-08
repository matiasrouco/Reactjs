import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {

  const { id } = useParams()
  const {data, isLoading } = useFetch(`https://fakestoreapi.com/products/${id}`)
  
  const onAdd = (items) => { 
    alert(`Agregado ${items} al carrito`)
 }

  return (
    <div className="container mt-5">
            { isLoading ? <h2>Cargando detalles...</h2> : <ItemDetail {...data} /> }
    </div>
  )
}
