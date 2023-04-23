import { useMutation, useQueryClient } from "react-query";
import { postBorrower, postSpending } from "../../services/routes";

const useCreateBorrowBook = () => {
  const queryClient = useQueryClient();
  return useMutation(
   async (values) => {
     const {data } =  await postBorrower(values);
     return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userBorrow");    
        alert("Thêm thành công!");

      },
      onError: (data) => {
        alert(data + " there was an error");
      },
    }
  );
};

export default useCreateBorrowBook;
