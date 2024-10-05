import { useContext } from "react";
import { TodoStore } from "./store/todo-items-store";
function TodoItem({todoName,todoDate,onDeleteHandle}) {
    const {deleteItem} = useContext(TodoStore);
    return <div class="row">
        <div class="col-4">
            {todoName}
        </div>
        <div class="col-4">
            {todoDate}
        </div>

        <button onClick={ () => deleteItem(todoName)} type="button" class="btn btn-danger">Delete</button>
    </div>
}
export default TodoItem;