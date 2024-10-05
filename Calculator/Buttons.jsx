import Button from "./Button";
const Buttons = ({onClickHandle,buttonLists}) => {
    return<div className="buttons">
        {buttonLists.map((btn) => (
            <Button onClickHandle={onClickHandle} btn = {btn}></Button>
        ))}
    </div>
}
export default Buttons;