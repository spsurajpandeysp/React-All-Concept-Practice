const AddItem = ({handleOnChange}) => {
    
    return <div className="add-item">
        <input onChange={handleOnChange} id="input-field" type="text" placeholder="Enter Item Name:"></input>
    </div>
}
export default AddItem;