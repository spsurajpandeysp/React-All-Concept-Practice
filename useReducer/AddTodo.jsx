import { useContext, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { TodoStore } from "./store/todo-items-store";
function AddTodo() {
    const { addNewItem } = useContext(TodoStore);
    const [todoName, setTodoName] = useState();
    const [dueDate, setDueDate] = useState();
    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    }
    const handleDueDateChange = (event) => {
        setDueDate(event.target.value);
    }

    const onClickHandleSecond = (event) => {
        event.preventDefault();
        setTodoName("");
        setTodoName("");
        addNewItem(todoName, dueDate);


    }

    return <div class="div-container">
        <form className="div-form">
            
            <input value={todoName} onChange={handleNameChange} className="inputTags" type="text" placeholder="Enter Todo Here" required/>
            
            <input value={dueDate} onChange={handleDueDateChange} className="inputTags" type="date" required/>
            
            <button onClick={onClickHandleSecond} type="button" class="btns"><IoIosAdd /></button>
        </form>
    </div>
}
export default AddTodo;