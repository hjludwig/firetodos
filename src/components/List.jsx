import React from "react";

const List = ({ todos }) => {
    return (
        <div>
            <h1>My Todos</h1>
            {todos.map(todo => (
                <p>{todo.todo}</p>
            ))}
        </div>
    );
};

export default List;
