import { useMutation, useQueryClient } from "react-query";
import { useAppSelector } from "../../../../hooks/reduxHook";
import { deleteBorrower } from "../../services/routes";

const useDeleteBorrowBook = () => {
  const queryClient = useQueryClient();
  const token = useAppSelector((state) => state.auth.user);

  return useMutation(
    async (id) => {
      const { data } = await deleteBorrower(token, id);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userBorrow");
        alert("Xoá thành công!");
      },
      onError: (data) => {
        alert(data + " there was an error");
      },
    }
  );
};

export default useDeleteBorrowBook;
