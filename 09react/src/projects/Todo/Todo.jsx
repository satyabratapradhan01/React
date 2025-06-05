import { useEffect, useState } from "react";
import "./Todo.css";
import { MdCheck, MdDeleteForever  } from "react-icons/md";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";


export const Todo = () => {
    
    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        if(!content) return;
        // if(task.includes(inputValue)) {
        //     return;
        // }
        const ifTodoContentMatched = task.find(
            (curTask) => curTask.content === content
        );
        if(ifTodoContentMatched) return;
        setTask((prevTask) => [...prevTask, { id:id, content:content, checked:checked },]);
    };
    //todo add data to localstorage
    localStorage.setItem("reactTodo", JSON.stringify(task));

    // Tode handleDeleteTodo function
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value)
        setTask(updatedTask);
    }

    // Todo handelClearTododata function
    const handleClearTodoData = () => {
        setTask([]);
    }

    // Tode handleCheckedTodo function
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if(curTask.content === content){
                return {... curTask, checked: !curTask.checked }
            } else {
                return curTask;
            }
        });
        setTask(updatedTask);
    }
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate />
            </header>
            <TodoForm onAddTodo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask) => {
                        return(
                            <TodoList 
                            key={curTask.id} 
                            data={curTask.content} 
                            checked = {curTask.checked}
                            onHandleDeleteTodo = {handleDeleteTodo}
                            onHandleCheckedTodo = {handleCheckedTodo} />
                        )
                    })}
                </ul>
            </section>
            <section className="clear-btn" onClick={handleClearTodoData}>Clear All</section>
        </section>
    );
}