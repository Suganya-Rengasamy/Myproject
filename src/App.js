import React, { useState } from 'react';
import './App.css';

function App() {

  //using  state hook 'useState'

  const [newItem, SetNewItem] = useState('');
  const [items, SetItems] = useState([]);

  function addItem() {
    const item = { id: Math.floor(Math.random() * 100), value: newItem};
    SetItems(oldItems => [...oldItems, item]);
    SetNewItem('');
  }
  function removeItem(id) {
    const newArray = items.filter(item => item.id !== id )
    SetItems(newArray);
  }
  return (
    <div className="App">
       <h1>My ToDo list</h1>

       <input type="text" placeholder='Add todo list item' value={newItem} onChange={e => SetNewItem(e.target.value)}/>
       <button onClick={() => addItem() }>Add</button>

       <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value} <button onClick={() => removeItem(item.id)}>Remove</button></li>            
          )
        })}
       </ul>
    </div>
  );
}

export default App;
