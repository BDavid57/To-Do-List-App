import React, { useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [currentItem, setCurrentItem] = useState('')
  const [itemList, updateItemList] = useState([])

  const idForObj = () => {
    return Math.floor(Math.random() * 100000);
  }

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  }

  const addItemToList = () => {
    updateItemList([...itemList, { item: currentItem, key: idForObj() }]);
    setCurrentItem('');
    console.log('list items', itemList);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      return addItemToList()
    }
  }

  return (
    <div className="App">

      <div className="wrapper">
        <h1>To Do List</h1>
        <div className="input-wrapper">
          <input
            type='text'
            value={currentItem}
            onChange={onChangeHandler}
            placeholder="Add item"
            onKeyDown={handleKeyDown} />

          <button onClick={addItemToList}>Add</button>
        </div>

        <List itemList={itemList} updateItemList={updateItemList} />
      </div>

    </div>
  );
}

export default App;