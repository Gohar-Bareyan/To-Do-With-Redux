export const initialToDoState = {
    toDoList: JSON.parse(localStorage.getItem("toDoList")) || [],
    newToDo: ""
}