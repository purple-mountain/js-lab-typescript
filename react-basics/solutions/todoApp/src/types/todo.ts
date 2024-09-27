import { z } from "zod";
import { createTodoSchema } from "../schemas/createTodoSchema";

export type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

export type CreateTodoSchema = z.infer<typeof createTodoSchema>;
