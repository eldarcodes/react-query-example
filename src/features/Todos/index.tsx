import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodos, postTodo } from "./api";

const Todos = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(["todos"], getTodos);

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  if (isLoading) return <>Loading todos...</>;
  if (isError) return <>Error loading todos.</>;

  return (
    <div>
      <button
        onClick={() => {
          mutation.mutate({ id: 132 });
        }}
      >
        update todo
      </button>

      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      {mutation.isLoading && "loading mutation..."}
    </div>
  );
};

export default Todos;
