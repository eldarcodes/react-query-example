import axios from "axios";
import { Todo } from "./types";

export const getTodos = () =>
  axios
    .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.data);

export const postTodo = (data: Partial<Todo>): Promise<Todo> => {
  console.log(data);
  return axios
    .post("https://jsonplaceholder.typicode.com/todos", data)
    .then((response) => response.data);
};
