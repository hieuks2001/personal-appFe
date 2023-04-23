import { useMutation, useQueryClient } from "react-query";
import { useAppSelector } from "../../../../hooks/reduxHook";
import { deleteBorrower, returnBook } from "../../services/routes";

const useReturnBook = () => {
  const queryClient = useQueryClient();
  const token = useAppSelector((state) => state.auth.user);

  return useMutation(
    async (values) => {
      const { data } = await returnBook(values,token);
      return values;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userBorrow");
        alert("Cập nhật thành công!");
        window.location.reload();
      },
      onError: (data) => {
        alert(data + " there was an error");
      },
    }
  );
};

export default useReturnBook;
