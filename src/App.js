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

  const idForObj = () => (Math.floor(Math.random() * 100000))

  const addItemToList = () => {
    updateItemList([...itemList, { item: currentItem, key: idForObj() }])
    setCurrentItem('')
  }

  const handleKeyDown = e => (e.key === 'Enter' ? addItemToList() : null)

  return (
    <div className="App">

      <div className="wrapper">
        <Input 
          currentItem={currentItem} 
          addItemToList={addItemToList} 
          handleKeyDown={handleKeyDown} updateCurrentItem={setCurrentItem} />
        
        <List itemList={itemList} updateItemList={updateItemList} />
      </div>

    </div>
  );
}

export default App;