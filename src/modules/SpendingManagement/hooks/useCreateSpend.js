import { useMutation, useQueryClient } from "react-query";
import { postSpending } from "../services/routes";

const useCreateSpend = () => {
  const queryClient = useQueryClient();
  return useMutation(
   async (values) => {
     const {data } =  await postSpending(values);
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

export default useCreateSpend;
