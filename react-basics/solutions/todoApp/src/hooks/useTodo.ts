import { useState } from "react";
import { Todo } from "../types/todo";
import { CreateTodoSchema } from "../types/todo";
import { v4 as uuidv4 } from "uuid";

export function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function removeTodo(id: string) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  function addTodo(data: CreateTodoSchema) {
    setTodos([...todos, { ...data, id: uuidv4(), completed: false }]);
  }

  function toggleTaskCompletion(id: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return { todos, removeTodo, addTodo, toggleTaskCompletion };
}
