function TodoItem({todoName,todoDate,onDeleteHandle}) {
    return <div class="row">
        <div class="col-4">
            {todoName}
        </div>
        <div class="col-4">
            {todoDate}
        </div>

        <button onClick={ () => onDeleteHandle(todoName)} type="button" class="btn btn-danger">Delete</button>
    </div>
}
export default TodoItem;