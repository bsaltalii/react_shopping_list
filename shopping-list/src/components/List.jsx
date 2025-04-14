import Item from "./Item.jsx";

export default function List({ items, onDeleteItem, onUpdateItem }) {
    if (items.length === 0) {
      return <h5 className="d-flex justify-content-center mt-3">No items</h5>;
    }
  
    return (
      <div className="list mt-4">
        <ul className="list-group">
          {items.map((item) => (
            <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />
          ))}
        </ul>
      </div>
    );
  }