import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const Input = (props) => {
    const idForObj = () => (Math.floor(Math.random() * 100000))

    const addItemToList = () => {
        const newToDo = {
            key: idForObj(),
            item: props.currentItem,
            date: props.currentDate,
            hour: props.currentTime,
        }

        props.updateItemList([...props.itemList, newToDo])
        props.updateCurrentItem('')
        props.setCurrentDate('')
        props.setCurrentTime('')
        console.log(props.itemList)
    }

    const handleKeyDown = e => (e.key === 'Enter' ? addItemToList() : null)

    return <div>
        <h1>To Do List</h1>
        <div className="input-wrapper">
            <TextField
                className="item-text"
                variant="standard"
                label="Add Item"
                InputLabelProps={{ shrink: true }}
                value={props.currentItem}
                onKeyDown={handleKeyDown}
                onChange={e => (props.updateCurrentItem(e.target.value))} />
        </div>
        <div className="date-time-wrapper">
            <div className="date-and-time">
                <div className="date">
                    <TextField
                        value={props.currentDate}
                        type="date"
                        onChange={e => (props.setCurrentDate(e.target.value))} />
                </div>

                <div className="time">
                    <TextField
                        value={props.currentTime}
                        type="time"
                        onChange={e => (props.setCurrentTime(e.target.value))} />
                </div>
            </div>
            <Button onClick={addItemToList}>Add</Button>
        </div>
    </div>
}

export default Input;
