const AddItem = ({handleOnKeyDown,handleOnChange}) => {
    
    return <div className="add-item">
        <input onKeyDown={handleOnKeyDown} onChange={handleOnChange} id="input-field" type="text" placeholder="Enter Item Name:"></input>
    </div>
}
export default AddItem;