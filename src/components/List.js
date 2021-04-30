// import { RiCloseCircleLine } from 'react-icons/ri';
import { red } from '@material-ui/core/colors';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const List = (props) => {
    const deleteItemFromList = key => {
        const newList = props.itemList.filter(itemObj => itemObj.key !== key);
        props.updateItemList(newList);
    }
    return (
        <div>
            {props.itemList.map(itemObj => (
                <div key={itemObj.key} className="item">
                    <div className="date-time-display">
                        <p>{itemObj.date}</p>
                        <div className="time-display">
                            <p>{itemObj.hour}</p>
                        </div>
                    </div>

                    <div className="content-display">
                        <p>{itemObj.item}</p>
                        <DeleteForeverIcon
                            onClick={() => deleteItemFromList(itemObj.key)}
                            className="delete-button"
                            style={{
                                fontSize: 40,
                                color: red[300]
                            }} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default List;