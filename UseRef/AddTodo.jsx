import { useRef } from "react";
import { IoIosAdd } from "react-icons/io";
function AddTodo({onClickHandle}) {

    const todoNameElement = useRef();
    const dueDateElement = useRef();  

    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        todoNameElement.current.value = "";
        dueDateElement.current.value="";
        onClickHandle(todoName,dueDate);
    }
    return <div class="container">

        <div class="add-row">
            <form onSubmit={handleAddButtonClicked} >

                <input ref={todoNameElement} className="inputTags" type="text" placeholder="Enter Todo Here" />
            
                <input ref={dueDateElement} className="inputTags" type="date" />
            
                <button type="submit" class="btns"><IoIosAdd/></button>
            </form>
            
        </div>
    </div>
}
export default AddTodo;