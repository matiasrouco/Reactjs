import { Item } from "../Item/Item";

export const ItemList = ({ items }) => {
	return (
		<div className="container d-flex flex-sm-wrap">
			{items.map((items) => (
				<Item key={items.id} {...items} />
			))}
		</div>
	);
};
