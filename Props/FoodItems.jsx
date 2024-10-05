import Item from "./item";
const FoodItems= (props) =>{
    return<>
        <ul className="list-group">
            {props.foodItem.map((items) => (<Item key = {items}  data = {items}></Item>))}
        </ul>
    </>
};
export default FoodItems;