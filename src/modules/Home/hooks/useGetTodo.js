import { useQuery } from "react-query";
import { getTodo } from "./../services/home";

const useGetTodo = () => {
  return useQuery("todos", async () => {
    const { data } = await getTodo();
    return data;
  });
};

export default useGetTodo;
