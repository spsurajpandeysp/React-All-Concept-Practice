import AddItem from './AddItem';
import Heading from './Heading';
import Items from './Items';
import './App.css'
const App = () => {
    let textToShow = "Food Item Entered By user";
    const handleOnChange = (event) =>{
        console.log(event.target.value);
    }
    
    let itemLists = ['Roti','Green vegetable','Tamato','Milk','Rice','Egg']
    return <center className='cent'>
        <Heading/>
        <p>{textToShow}</p>
        <AddItem handleOnChange={handleOnChange}/>
        <Items itemLists = {itemLists}/>
    </center>
}

export default App;