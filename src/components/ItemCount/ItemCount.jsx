
import { useCount } from "../../hooks/useCount";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {

  const { increment, decrement, count } = useCount(0, stock);



  return (
    <div className="d-flex flex-column col-2 justify-content-center align-content-center border border-3 border-primary rounded-3 p-4">
      <div>
        <button className="btn btn-outline-secondary mx-3" onClick={increment}>
          +
        </button>
        <strong>{count}</strong>
        <button className="btn btn-outline-secondary mx-3" onClick={decrement}>
          -
        </button>
      </div>
      <button className="btn btn-outline-primary mt-2" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};
