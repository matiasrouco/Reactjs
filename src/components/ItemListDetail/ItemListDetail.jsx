import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemListDetail = ({ items }) => {

	return (
		<div className="container d-flex flex-sm-wrap">
			{items.map((items) => (
				<ItemDetail key={items.id} {...items} />
			))}
		</div>
	);
};