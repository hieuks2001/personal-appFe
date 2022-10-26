import { useMutation, useQueryClient } from "react-query";
import { deleteSpending } from "../services/routes";

const useDeleteSpend = () => {
  const queryClient = useQueryClient();
  return useMutation(
   async (id) => {
     const {data } =  await deleteSpending(id);
     return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("spending");    
      },
      onError: (data) => {
        alert(data + " there was an error");
      },
    }
  );
};

export default useDeleteSpend;
