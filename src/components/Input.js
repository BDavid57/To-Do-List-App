
const Input = (props) => {
    const onChangeHandler = e => (props.updateCurrentItem(e.target.value))

    return <div>
        <h1>To Do List</h1>
            <div className="input-wrapper">
                <input 
                    type="text"
                    placeholder="Add Item"
                    value={props.currentItem}
                    onKeyDown={props.handleKeyDown}
                    onChange={onChangeHandler}/>
                <button onClick={props.addItemToList}>Add</button>
            </div>
    </div>
}

export default Input;