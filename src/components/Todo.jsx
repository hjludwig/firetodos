import React from "react";
import { db } from "../firebase/config";

const Todo = ({ todo }) => {
    const removeTodo = id => {
        db.collection("todos").doc(id).delete();
    };

    return (
        <div>
            <li>{todo.todo}</li>
            <button type="button" onClick={() => removeTodo(todo.id)}>
                Remove
            </button>
        </div>
    );
};

export default Todo;
