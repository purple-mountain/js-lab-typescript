import { Todo } from "../../types/todo";

export type TodoListProps = {
  todos: Todo[];
  removeTodo: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
};
