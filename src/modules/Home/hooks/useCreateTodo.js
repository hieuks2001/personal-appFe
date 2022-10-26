import { useMutation } from "react-query";
import { postTodo } from "../services/home";
import { useQueryClient } from "react-query";

const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(
   async (values) => {
     const {data } =  await postTodo(values);
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

export default useCreateTodo;
