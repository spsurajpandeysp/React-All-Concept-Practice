import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import './todo.css';
import WelcomeMess from "./WelcomeMess";
import { useState } from "react";
import { TodoStore } from "./store/todo-items-store";

function App() {

    let [todoItems, setTodoItem] = useState([{
        name: 'Buy Milk',
        dueDate: '4-10-2023'
    }, {
        name: 'Goo to College',
        dueDate: '2024-10-04',
    },
    {
        name: 'Goo to College',
        dueDate: '2024-10-04',
    }]);
    const addNewItem = (itemName, itemDueDate) => {

        const newTodoItem = [...todoItems, { name: itemName, duedate: itemDueDate }];
        setTodoItem(newTodoItem);

    }
    const deleteItem= (todoName) => {
        const newTodoItem = todoItems.filter(item => item.name !== todoName);
        setTodoItem(newTodoItem);
    }
    return( <TodoStore.Provider value={{todoItems:todoItems,addNewItem:addNewItem,deleteItem:deleteItem}}>
        <center className="items-container">
            <AppName />
            <AddTodo/>
            <WelcomeMess />
            <TodoItems/>
        </center>
    </TodoStore.Provider>
        
    )
        
}

export default App;