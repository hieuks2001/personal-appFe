import { useMutation } from "react-query";
import { deleteTodo } from "../services/home";
import { useQueryClient } from "react-query";

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(
   async (id) => {
     const {data } =  await deleteTodo(id);
     return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");    
      },
      onError: (data) => {
        alert(data + " there was an error");
      },
    }
  );
};

export default useDeleteTodo;
