import React from "react";
function App() {
    let foodItems = ['Dal','Green Vegetable','Roti','Salad','Milk']
    return <React.Fragment>
        <center>
        <h1>Healty Foods</h1>
        <ul class="list-group">
            {foodItems.map(item=> <li key={item.key} class="list-group-item">{item}</li>)}
        </ul>
    </center>
    </React.Fragment>
}
export default App;