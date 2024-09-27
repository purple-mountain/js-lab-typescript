import { CreateTodoSchema, Todo } from "../../types/todo";

export type TodoFormProps = {
  todos: Todo[];
  addTodo: (data: CreateTodoSchema) => void;
};
