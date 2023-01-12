import { ADD_TODO, DELETE_TODO, SET_TITLE, UPDATE_TODO_LIST } from "./types"

export const setTitle = (value) => {
    return {
        type: SET_TITLE,
        payload: value
    }
};

export const addToDo = (id) => {
    return {
        type: ADD_TODO,
        payload: id
    }
};

export const updateToDoList = (newToDoList) => {
    return {
        type: UPDATE_TODO_LIST,
        payload: newToDoList
    }
};

export const deleteToDo = (newToDoList) => {
    return {
        type: DELETE_TODO,
        payload: newToDoList
    }
};

