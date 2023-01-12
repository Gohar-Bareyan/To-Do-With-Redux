import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToDo, deleteToDo, setTitle, updateToDoList } from "../../Store/ToDo/action";
import Header from "../Header";
import Table from "../Table";
import styles from "./index.module.scss"

const ToDoApp = () => {
    const toDoState = useSelector(state => state);

    const dispatch = useDispatch()

    const handleToDoChange = (event) => {
        dispatch(setTitle(event.target.value))
    }

    const handleAdd = () => {
        const fakeId = Date.now();
        dispatch(addToDo(fakeId));
        dispatch(setTitle(""))
    }

    const handleComplete = (toDoId) => {
        const updatedToDoList = toDoState.toDoList.map(el => el.id === toDoId ? { ...el, done: !el.done } : el);
        dispatch(updateToDoList(updatedToDoList))
    }

    const handleDelete = (toDoId) => {
        const filteredToDo = toDoState.toDoList.filter(el => el.id !== toDoId)
        dispatch(deleteToDo(filteredToDo))
    }

    const handleEdit = (toDoId) => {
        const editedToDo = toDoState.toDoList.map(el => el.id === toDoId ? { ...el, edited: !el.edited } : el);
        dispatch(updateToDoList(editedToDo))
    }

    const handleEditText = (event, toDoId) => {
        const toDoListWithEditedText = toDoState.toDoList.map(el => el.id === toDoId ? { ...el, name: event.target.value } : el);
        dispatch(updateToDoList(toDoListWithEditedText))
    }

    useEffect(() => {
        localStorage.setItem("toDoList", JSON.stringify(
            toDoState.toDoList
        ))
    }, [toDoState.toDoList])

    return (
        <div className={styles.container}>
            <Header
                newToDo={toDoState.newToDo}
                handleToDoChange={handleToDoChange}
                handleAdd={handleAdd}
            />
            <Table
                toDoList={toDoState.toDoList}
                handleEditText={handleEditText}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </div>
    )
}

export default ToDoApp