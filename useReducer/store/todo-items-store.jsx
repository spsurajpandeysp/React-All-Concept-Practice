import {createContext} from 'react';
import { useReducer } from 'react'; 
export const TodoStore = createContext({
    todoItems: [],
    addNewItems: () => {},
    deleteItem: () => {}
});
const todoItemsReducer = (currTodoItems,action) => {
    let newTodoItems = currTodoItems;
    if (action.type === 'NEW_ITEM'){
        newTodoItems = [
            ...currTodoItems,
            {name: action.payload.itemName,dueDate:action.payload.itemDueDate},
        ];
    }
    else if (action.type === 'DELETE_ITEM'){
        newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.todoName);

    }
    return newTodoItems;
}
const TodoItemsContextProvider = ({children}) =>{
    const [todoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[]);
    const addNewItem = (itemName, itemDueDate) => {
        const newItemAction = {
            type:'NEW_ITEM',
            payload:{
                itemName,
                itemDueDate
            }
        };
        dispatchTodoItems(newItemAction);
    }
    const deleteItem= (todoName) => {
        const deleteAction = {
            type:'DELETE_ITEM',
            payload:{
                todoName
            }
        }
        dispatchTodoItems(deleteAction);
    } 
    return <TodoStore.Provider value={{todoItems:todoItems,addNewItem:addNewItem,deleteItem:deleteItem}}>
        {children}
    </TodoStore.Provider>
}

export default TodoItemsContextProvider;