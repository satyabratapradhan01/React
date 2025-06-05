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

    // Tode handleDeleteTodo function
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value)
        setTask(updatedTask);
    }
    const handleClearTodoData = () => {
        setTask([]);
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
                            <TodoList key={curTask.id} data={curTask.content} onHandleDeleteTodo = {handleDeleteTodo} />
                        )
                    })}
                </ul>
            </section>
            <section className="clear-btn" onClick={handleClearTodoData}>Clear All</section>
        </section>
    );
}