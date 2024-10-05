import PropsHeading from "./PropsHeading";
import FoodItems from "./FoodItems";
import ErrorMess from "./ErrorMess";
import './app.css';
function App(){
    let foodItems = ['Dal','green vegetables','Roti','Panner'];
    return <center>
        <PropsHeading/>
        <ErrorMess foodItem = {foodItems}></ErrorMess>
        <FoodItems foodItem = {foodItems}></FoodItems>
    </center>
}
export default App;