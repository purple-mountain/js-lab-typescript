import { z } from "zod";
import { Todo } from "../../types/todo";
import { createTodoSchema } from "../../schemas/createTodoSchema";

export type TodoFormProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export type CreateTodoSchema = z.infer<typeof createTodoSchema>;
