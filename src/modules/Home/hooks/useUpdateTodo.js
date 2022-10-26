import { useMutation } from "react-query";
import { postTodo } from "../services/home";
import { useQueryClient } from "react-query";
import { updateTodo } from './../services/home';

const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(
   async (id) => {
     const {data } =  await updateTodo(id);
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

export default useUpdateTodo;
