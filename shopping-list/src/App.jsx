import { useState } from "react";
import "./index.css"; 
import Header from "./components/Header.jsx";
import Form from './components/Form.jsx'
import List from "./components/List.jsx";
import Summary from "./components/Summary.jsx";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleClearList() {
    if (window.confirm("Do you want to clear the list?")) {
      setItems([]);
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 custom-card">
        <Header />
        <Form onAddItem={handleAddItem} onClearList={handleClearList} />
        <List items={items} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} />
        <Summary itemsLength={items.length} />
      </div>
    </div>
  );
}
export default App;
