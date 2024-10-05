import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import './todo.css';
import WelcomeMess from "./WelcomeMess";

import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
    
    return( <TodoItemsContextProvider>
        <center className="items-container">
            <AppName />
            <AddTodo/>
            <WelcomeMess />
            <TodoItems/>
        </center>
    </TodoItemsContextProvider>
        
    )
        
}

export default App;