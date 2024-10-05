import {createContext} from 'react';

export const TodoStore = createContext({
    todoItems: [],
    addNewItems: () => {},
    deleteItem: () => {}
});