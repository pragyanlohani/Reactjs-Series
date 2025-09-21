import './App.css';
import Header from './header';
import Content from './content';
import Footer from './fotter';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem'; // ✅ Fix import

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );

  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  };

  const addItem = (itemName) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: itemName };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="App">
      <Header title="Groceries list" />
      <SearchItem search={search} setSearch={setSearch} /> 
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items.filter(item =>
          item.item.toLowerCase().includes(search.toLowerCase()) 
        )}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
