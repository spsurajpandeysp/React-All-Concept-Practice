const Button = ({onClickHandle,btn}) => {
    return <>
        <button value={btn} onClick={onClickHandle} id="button">{btn}</button>
    </>
}

export default Button;