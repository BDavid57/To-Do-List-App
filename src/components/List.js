import { RiCloseCircleLine } from 'react-icons/ri';

const List = (props) => {
    const deleteItemFromList = key => {
        const newList = props.itemList.filter(itemObj => itemObj.key !== key);
        props.updateItemList(newList);
    }
    return (
        <div>
            {props.itemList.map(itemObj => {
                return <div key={itemObj.key} className="item">
                            <p>{itemObj.item}</p>
                            <RiCloseCircleLine
                                onClick={() => deleteItemFromList(itemObj.key)}
                                className="delete-button" />
                    </div>
            })}
        </div>
    )
}

export default List;