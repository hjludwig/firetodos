import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import List from "./components/List";
import { db } from "./firebase/config";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        db.collection("todos").onSnapshot(snapshot => {
            let theTodos = [];
            snapshot.forEach(doc => {
                console.log(doc.data());
                theTodos.push({ id: doc.id, ...doc.data() });
            });
            setTodos(theTodos);
        });
    }, []);

    return (
        <div className="App">
            <InputForm />
            <List todos={todos} />
        </div>
    );
}

export default App;
