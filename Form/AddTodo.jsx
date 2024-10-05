import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
function AddTodo({onClickHandle}) {

    const [todoName,setTodoName] = useState();
    const [dueDate,setDueDate] = useState();
    const handleNameChange = (event)=> {
        setTodoName(event.target.value);
    }
    const handleDueDateChange = (event) =>{
        setDueDate(event.target.value);
    }

    const onClickHandleSecond=()=>{
        onClickHandle(todoName,dueDate);
        setDueDate("");
        setTodoName("");
    }

    return <div class="container">

        <div class="add-row">
            <div class="col-4">
                <input value={todoName} onChange={handleNameChange} className="inputTags" type="text" placeholder="Enter Todo Here" />
            </div>
            <div class="col-4">
                <input value={dueDate} onChange={handleDueDateChange} className="inputTags" type="date" />
            </div>
            <button onClick={onClickHandleSecond} type="button" class="btns"><IoIosAdd/></button>
        </div>
    </div>
}
export default AddTodo;