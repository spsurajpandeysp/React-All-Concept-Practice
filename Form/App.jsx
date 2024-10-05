import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import './todo.css';
import WelcomeMess from "./WelcomeMess";
import { useState } from "react";

function App() {

    let [todoItems,setTodoItem] = useState([{
        name:'Buy Milk',
        dueDate:'4-10-2023'
    },{
        name:'Go to College',
        dueDate:'2024-10-04',
    }]);
    const onClickHandle = (itemName,itemDueDate) => {
  
        const newTodoItem = [...todoItems , {name: itemName,duedate: itemDueDate}];
        setTodoItem(newTodoItem);
     
    }
    const handleDeleteItem = (todoName) =>{
        const newTodoItem = todoItems.filter(item => item.name !== todoName);
        setTodoItem(newTodoItem);
    }
    return <center className="items-container">
        <AppName />
        <AddTodo onClickHandle={onClickHandle}/>
        { todoItems.length === 0 && <WelcomeMess/>}
        <TodoItems todoItems={todoItems}  onDeleteClick={handleDeleteItem}/>
                
    </center>
}

export default App;