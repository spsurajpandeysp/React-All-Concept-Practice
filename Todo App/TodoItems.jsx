import TodoItem from "./TodoItem";
const TodoItems = ({todoItems,onDeleteClick}) => {
    return <>
            {todoItems.map((item => (
                <TodoItem  todoName={item.name} todoDate={item.dueDate} onDeleteHandle={onDeleteClick}/>
            )))}
    </>
}
export default TodoItems;