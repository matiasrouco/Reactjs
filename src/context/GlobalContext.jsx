import { createContext, useState,useEffect } from "react";

// Creamos el context
export const GlobalContext = createContext(null);

// Creamos el provider
export const GlobalContextProvider = ({ children }) => {
	const [totalProducts, setTotalProducts] = useState(0);
	const [message, setMessage] = useState("");

	const [cart, setCart] = useState([]);
	const [total] = useState(0);

	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	const removeFromCart = (id) => {
		const productsFilter = cart.filter((product) => product.id !== id);
		setCart(productsFilter);
	};

	const clearCart = () => {
		setCart([]);
	};

	const getCartTotal = () => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const handleAddProductCart = (product, quantity) => {
		const index = cart.findIndex((item) => item.id === product.id);
		if (index == -1) {
			const newProduct = {
				...product,
				quantity,
				subTotal: product.price * quantity,
			};
			setCart([...cart, newProduct]);
		} else {
			// Copia del carrito
			const cartCopy = [...cart];
			// sumamos la cantidad recibida a la cantidad existente
			cartCopy[index].quantity += quantity;
			// Volvemos a calcular el sub total con la cantidad actualizada
			cartCopy[index].subTotal =
				cartCopy[index].price * cartCopy[index].quantity;

			setCart(cartCopy);
		}
		// setCart([...cart, product]);
	};

	const handleTotalProducts = () => {
		const items = cart.reduce((acum, item) => acum + item.quantity, 0);
		setTotalProducts(items);
	};

	useEffect(() => {
		handleTotalProducts();
	}, [cart]);

	const objetProvider = {
		message,
		handleMessage,
		handleAddProductCart,
		cart,
		total,
		removeFromCart,
		clearCart,
		getCartTotal,
		totalProducts,
	};

	return (
		<GlobalContext.Provider value={objetProvider}>
			{" "}
			{children}{" "}
		</GlobalContext.Provider>
	);
};
