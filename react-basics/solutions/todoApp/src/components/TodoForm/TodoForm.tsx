import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { createTodoSchema } from "../../schemas/createTodoSchema";
import { CreateTodoSchema, TodoFormProps } from "./TodoForm.types";
import { Button, TextField } from "@mui/material";

export function TodoForm({ setTodos, todos }: TodoFormProps) {
  const IDRef = useRef(0);

  const { handleSubmit, register, reset } = useForm<CreateTodoSchema>({
    resolver: zodResolver(createTodoSchema),
  });

  function onSubmit(data: CreateTodoSchema) {
    setTodos([...todos, { ...data, id: ++IDRef.current, completed: false }]);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        {...register("name")}
      />
      <Button variant="contained">Submit</Button>
    </form>
  );
}
