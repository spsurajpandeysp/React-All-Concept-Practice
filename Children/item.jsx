const Item = ({item}) => {
    return <div className='item-data'>
        <h6 className="heading">{item}</h6>
        <button className="btn-item">Buy</button>
    </div>
}

export default Item;