import AddItem from './AddItem';
import Heading from './Heading';
import Items from './Items';
import './App.css'
import { useState } from 'react';
const App = () => {
    // let textStateArr = useState("Food Item Entered By user");
    // let textStateVal = textStateArr[0];
    // let setTextState = textStateArr[1];
     
    let [textToShow,setTextState] = useState("Food Item Entered By user")
    

    const handleOnChange = (event) => {
        setTextState(event.target.value);
    }
    
    let [foodItem,setFoodItem] = useState(['Roti','Green vegetable','Tamato','Milk','Rice','Egg'])
    const handleOnKeyDown = (event) => {
        // setFoodItem(event.target.value)
        if(event.key === "Enter"){
            let newItem = [...foodItem,event.target.value];
            event.target.value = "";
            setFoodItem(newItem);
        }
    }
    //let itemLists = ['Roti','Green vegetable','Tamato','Milk','Rice','Egg']
    //useState([])
    return <center className='cent'>
        <Heading/>
        
        <AddItem handleOnKeyDown={handleOnKeyDown} handleOnChange={handleOnChange}/>
        {<p>{textToShow}</p>}
        <Items itemLists = {foodItem}/>
    </center>
}

export default App;