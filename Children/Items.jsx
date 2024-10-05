import Item from "./item";
const Items = ({itemLists}) => {
    return <div className="items-data">
        {itemLists.map((item) => <Item key={item} item={item}/>)}
    </div>
}

export default Items;