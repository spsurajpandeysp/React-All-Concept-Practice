const AddFood = () => {
    
    const handleOnChange = (event) => {
        console.log(event.target.value);
    }
    return <input type="text" onChange={handleOnChange} placeholder="Enter Food Item" id="add-food"></input>
}
export default AddFood;