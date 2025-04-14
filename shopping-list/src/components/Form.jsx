import { useState } from "react";

export default function Form({ onAddItem, onClearList }) {
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (title.trim()) {
        onAddItem({ id: Date.now(), title, quantity, completed: false });
        setTitle("");
        setQuantity(1);
      }
    };
  
    return (
      <form className="d-flex flex-column gap-2" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Please enter product name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="form-select"
        >
          {[...Array(10)].map((_, i) => (
            <option value={i + 1} key={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button type="submit" className="btn btn-primary w-100">Add</button>
        <button type="button" className="btn btn-danger w-100" onClick={onClearList}>Clear</button>
      </form>
    );
  }
