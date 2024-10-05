import Container from "./Container";
import Items from "./Items";
import Heading from "./Heading";
import AddFood from "./AddFood";
import './App.css';
const App = () => {
    let itemLists = ['Sabzi','Green Vegetable','Roti','Salad','Milk','Panner','Tamato']
    return <center>
        <Container>
            <Heading></Heading>
            <AddFood></AddFood>
            <Items itemLists = {itemLists}></Items>
        </Container>

    </center>
}

export default App;