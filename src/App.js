import React, { useState, useEffect } from 'react';
import './App.css';
// Import Components
import List from './components/List';
import Input from './components/Input';

function App() {
  const [currentDate, setCurrentDate] = useState('')
  const [currentTime, setCurrentTime] = useState('')
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
            updateItemList={updateItemList}
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime} />

          <List itemList={itemList} updateItemList={updateItemList} />
        </div>

      </div>

    </div>
  );
}

export default App;