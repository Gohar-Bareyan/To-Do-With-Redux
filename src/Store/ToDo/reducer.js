import { initialToDoState } from "./state";
import { SET_TITLE, ADD_TODO, UPDATE_TODO_LIST, DELETE_TODO } from "./types";

export const toDoReducer = (state = initialToDoState, action) => {
    switch (action.type) {
        case SET_TITLE:
            return { ...state, newToDo: action.payload };
        case ADD_TODO:
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    {
                        id: action.payload,
                        name: state.newToDo,
                        done: false,
                        edited: false
                    }
                ]
            }
        case UPDATE_TODO_LIST:
            return {
                ...state,
                toDoList: action.payload
            }
        case DELETE_TODO:
            return {
                ...state,
                toDoList: action.payload
            }
        default:
            return state
    }
}