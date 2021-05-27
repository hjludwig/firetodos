import React, { useState } from "react";
import { db } from "../firebase/config";

const InputForm = () => {
    const [value, setValue] = useState("");
    const handleChange = e => {
        setValue(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        db.collection("todos").add({
            todo: value,
        });
        setValue("");
    };

    return (
        <div>
            <h1>Add a task</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default InputForm;
