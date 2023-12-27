import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	Cart,
	NavBar,
	ItemListContainer,
	ItemDetailContainer,
} from "./components";
import { CategoryListContainer } from "./components/CategoryListContainer/CategoryListContainer";
import { GlobalContextProvider } from "./context/GlobalContext"

export const App = () => {
	return (
		<GlobalContextProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/products/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route
						path="category/:category"
						element={<CategoryListContainer />}
					/>
				</Routes>
			</BrowserRouter>
		</GlobalContextProvider>
	);
};
