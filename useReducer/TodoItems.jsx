import TodoItem from "./TodoItem";
import {TodoStore} from "./store/todo-items-store";
import { useContext } from "react";
const TodoItems = () => {
    const contextObj = useContext(TodoStore);
    const todoItems = contextObj.todoItems;

    return <>
            {todoItems.map((item => (
                <TodoItem key={item} todoName={item.name} todoDate={item.dueDate}/>
            )))}
    </>
}
export default TodoItems;