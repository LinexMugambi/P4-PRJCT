import React, { useState } from 'react';
import Navbar from './Navbar';
import './style.css'

function Todo() {
  const [items, setItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      text: event.target.elements.itemInput.value,
      completed: false,
    };
    setItems([...items, newItem]);
    event.target.reset();
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleEditItem = (id) => {
    setEditingItemId(id);
  };

  const handleEditSubmit = (event, id) => {
    event.preventDefault();
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          text: event.target.elements.editItemInput.value,
        };
      }
      return item;
    });
    setItems(updatedItems);
    setEditingItemId(null);
  };

  return (
    <div className="todoapp stack-large">
      <Navbar />
      <h1>My List</h1>
      <form onSubmit={handleAddItem}>
        <h2 className="label-wrapper">
          <label htmlFor="new-item-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-item-input"
          className="input input__lg"
          name="itemInput"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <h2 id="list-heading">
        {items.length === 0
          ? 'No Items'
          : `${items.length} ${items.length === 1 ? 'item' : 'items'}`}
      </h2>
      <ul
        role="list"
        className="item-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {items.map((item) => (
          <li key={item.id} className="item stack-small">
            <div className="c-cb">
              <input
                id={`item-${item.id}`}
                type="checkbox"
                defaultChecked={item.completed}
              />
              <label className="item-label" htmlFor={`item-${item.id}`}>
                {editingItemId === item.id ? (
                  <form onSubmit={(event) => handleEditSubmit(event, item.id)}>
                    <input
                      type="text"
                      id={`edit-item-${item.id}`}
                      className="input item-text"
                      name="editItemInput"
                      defaultValue={item.text}
                      autoComplete="off"
                    />
                    <button type="submit" className="btn btn__primary item-edit">
                      Save
                    </button>
                  </form>
                ) : (
                  <span>{item.text}</span>
                )}
              </label>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn"
                onClick={() => handleEditItem(item.id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn__danger"
                onClick={() => handleDeleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
       

        ))}
      </ul>
   

      </div>
    );
}

export default Todo;
