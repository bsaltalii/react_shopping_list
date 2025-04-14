export default function Item({ item, onDeleteItem, onUpdateItem }) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onUpdateItem(item.id)}
          className="form-check-input"
        />
        <span style={item.completed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.title}
        </span>
        <button onClick={() => onDeleteItem(item.id)} className="btn btn-sm btn-danger">Remove</button>
      </li>
    );
  }