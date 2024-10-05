const ErrorMess = (props) =>{
    return <>
        {props.foodItem.length === 0 && <h3>I am Still Hungry</h3>}
    </>
};

export default ErrorMess;