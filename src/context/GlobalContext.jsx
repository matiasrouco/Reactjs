import { createContext, useState,useEffect,Alert, AlertTitle } from "react";
export const GlobalContext = createContext(null);
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
			alert("Se agrego el producto al carrito");
		} else {
			const cartCopy = [...cart];
			cartCopy[index].quantity += quantity;
			cartCopy[index].subTotal =
				cartCopy[index].price * cartCopy[index].quantity;

			setCart(cartCopy);
			alert("Se agrego el producto al carrito");
		}
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
