import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { db } from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const Cart = () => {
	const { cart, removeFromCart,clearCart, getCartTotal } = useContext(GlobalContext);
	const { totalProducts } = useContext(GlobalContext);



	const agregarOrdenCompra = async () => {
		try {
		  const collectionRef = collection(db, "orders");
	
		  const nuevoRegistro = {
			cantidad: totalProducts(),
			total: getCartTotal(),
		  };
		  await addDoc(collectionRef, nuevoRegistro);
	
		  console.log("Registro agregado con éxito.");
		} catch (error) {
		  console.error("Error al agregar el registro:", error);
		}
	  };


 
	return (
		<>
		<div className="border border-3 p-3 d-flex flex-column m-2">
			<h2>Carrito</h2>

			{cart.map((c) => (
				<p key={c.id}>
					<div>
						<img src={c.image} alt="" width="150px" />
					</div>
					<div>Producto : {c.title}</div>
					<div>Cantidad : {c.quantity}</div>
					<div>Precio Unitario : {c.price}</div>
					<div>Precio Subtotal : {c.subTotal}</div>
          <div className="d-flex flex-column col-2 justify-content-center align-content-center border border-3 border-primary rounded-3 p-4">
          <button className="btn btn-outline-secondary mx-3" onClick={() => removeFromCart(c.id) }> Eliminar </button>
          </div>
          
				</p>
			))}
		</div>

		<div>
			<h2> TOTAL DE LA COMPRA</h2>
				<p> Total :{ getCartTotal()}</p>
				<button className="btn btn-success mx-3" onClick={agregarOrdenCompra()}> COMPRAR </button>
		</div>

		<div>
			<h2> Limpiar Carrito</h2>
			<button className="btn btn-outline-secondary mx-3" onClick={() => clearCart() }> Limpiar Carrito </button>
		</div>
		</>
		

    
	);
};
