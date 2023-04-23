import { useMutation, useQueryClient } from "react-query";
import { updateSpending } from "../../services/routes";
import { useAppSelector } from "../../../../hooks/reduxHook";

const useUpdateBorrowBook = () => {
  const queryClient = useQueryClient();
  const token = useAppSelector((state) => state.auth.user);
  
  return useMutation(
    async (values) => {
      console.log(values);
      const { data } = await updateSpending(values.borrowerCardNo, values,token);
      return data;
    },
    {
      onSuccess: () => {
        alert('Thay đổi thành công!');
        queryClient.invalidateQueries("userBorrow");
      },
      onError: (data) => {
        alert(data + " there was an error");
      },
    }
  );
};

export default useUpdateBorrowBook;
