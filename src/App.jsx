import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/navBar/NavBar";

export const App = () => {
	return (
		<>
			<NavBar />
			<ItemListContainer message="Lista de Articulos a Vender"/>
		</>
	);
};
