const Item = ({bought,item,handleBuyButton}) => {
    return <div className={"item"}>
        <div  className="item-name">{item}</div>
        <button onClick={handleBuyButton} className="buy-btn">Buy</button>
    </div>
}



export default Item;