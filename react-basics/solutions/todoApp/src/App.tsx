import "./App.css";
import { useEffect, useState } from "react";
import { Todo } from "./types/todo";
import { TodoMessage } from "./components/TodoMessage";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const allTodosCompleted = todos.every((todo) => todo.completed === true);

    if (todos.length === 0) {
      setMessage("No tasks are left");
    } else if (allTodosCompleted) {
      setMessage("All tasks are completed");
    } else {
      setMessage("");
    }
  }, [todos]);

  return (
    <main>
      {message !== "" && <TodoMessage message={message} />}
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default App;
