import React from "react";
import Todo from "./Todo";

const List = ({ todos }) => {
    return (
        <div>
            <h1>My Todos</h1>
            <ul>
                {todos.map(todo => (
                    <Todo todo={todo} key={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default List;
