import { useMutation, useQueryClient } from "react-query";
import { addBookLoan, updateSpending } from "../../services/routes";
import { useAppSelector } from "../../../../hooks/reduxHook";
import moment from "moment";

const useAddBookLoan = () => {
  const queryClient = useQueryClient();
  const token = useAppSelector((state) => state.auth.user);

  return useMutation(
    async (values) => {

      const { data } = await addBookLoan(values, token);
      return data;
    },
    {
      onSuccess: () => {
        alert("Thêm thành công!");
        queryClient.invalidateQueries("userBorrow");
      },
      onError: (data) => {
        alert(data + " there was an error");
      },
    }
  );
};

export default useAddBookLoan;
