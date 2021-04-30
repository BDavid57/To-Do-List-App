import React, { useState, useEffect } from 'react';
import './App.css';
// Import Components
import List from './components/List';
import Input from './components/Input';

function App() {
  const [currentItem, setCurrentItem] = useState('')
  const [itemList, updateItemList] = useState(
    localStorage.itemList ? JSON.parse(localStorage.itemList) : []
  )

  useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList))
  }, [itemList])

  return (
    <div className="App">

      <div className="wrapper">

        <div className="content">
          <Input
            currentItem={currentItem}
            updateCurrentItem={setCurrentItem}
            itemList={itemList}
            updateItemList={updateItemList} />

          <List itemList={itemList} updateItemList={updateItemList} />
        </div>

      </div>

    </div>
  );
}

export default App;
