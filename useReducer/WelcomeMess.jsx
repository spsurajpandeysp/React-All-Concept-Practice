import { TodoStore } from "./store/todo-items-store";
import { useContext } from "react";
const WelcomeMess = () => {
    const {todoItems} = useContext(TodoStore);

    return (
        todoItems.length === 0 && <p>Enjoy Your Day</p>
    );
} 
export default WelcomeMess;