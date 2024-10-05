function App(){
    let foodItem = ['Dal','Green vegetable','Roti','Salad','Milk'];
    // if (foodItem.length === 0){
    //     return <center>
    //         <h1>I am still Hungry</h1>
    //     </center>
    // }
    return <center>
        <h1>Healty Food</h1>
        {foodItem.length === 0 ? <h1>I am still Hungry</h1> : null}
        <ul className="list-group">
            {foodItem.map((item) => <li key={item.key} className="list-group-item">{item}</li>)}
        </ul>
    </center>
}

export default App;