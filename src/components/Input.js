

const Input = (props) => {
    const idForObj = () => (Math.floor(Math.random() * 100000))

    const addItemToList = () => {
        const newToDo = {
            item: props.currentItem,
            key: idForObj(),
            date: null,
            hour: null,
        }

        props.updateItemList([...props.itemList, newToDo])
        props.updateCurrentItem('')
    }

    const handleKeyDown = e => (e.key === 'Enter' ? addItemToList() : null)

    return <div>
        <h1>To Do List</h1>
        <div className="input-wrapper">
            <input
                type="text"
                placeholder="Add Item"
                value={props.currentItem}
                onKeyDown={handleKeyDown}
                onChange={e => (props.updateCurrentItem(e.target.value))} />
            <button onClick={props.addItemToList}>Add</button>
        </div>
    </div>
}

export default Input;
