import { Button, Checkbox } from "@mui/material";
import { TodoItem } from "../TodoItem";
import { TodoListProps } from "./TodoList.types";

export function TodoList({ todos, setTodos }: TodoListProps) {
  function toggleTaskCompletion(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function removeTodo(id: number) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  return (
    <div className="space-y-4 mb-4">
      {todos.map((todo) => (
        <div className="flex items-center justify-between" key={todo.id}>
          <div className="flex space-x-4">
            <TodoItem todo={todo} />
            <Checkbox
              checked={todo.completed}
              onChange={() => toggleTaskCompletion(todo.id)}
            />
          </div>
          <Button onClick={() => removeTodo(todo.id)} variant="contained">
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
}
