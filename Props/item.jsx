const Item = (props) => {
    // let {data} = props;
    return<>
   <li className="list-group-item kg-item" key={props.data}>{props.data}</li>
    </>
}

export default Item;