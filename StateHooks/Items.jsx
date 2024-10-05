import Item from './Item';
const buttonOnClick = ({item}) =>{
    console.log(item+" bought");
}
const Items = ({itemLists}) => {
    return <div className="items">
        {itemLists.map((item)=>(
            <Item handleBuyButton={()=> buttonOnClick({item})} key={item} item={item}></Item>
        ))}
    </div>
}
export default Items;