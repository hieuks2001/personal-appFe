import { useMutation, useQueryClient } from "react-query";
import { updateSpending } from "../services/routes";

const useUpdateSpend = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (values) => {
      const { data } = await updateSpending(values._id, values);
      return data;
    },
    {
      onSuccess: () => {
        alert('Thay đổi thành công!');
        queryClient.invalidateQueries("spending");
      },
      onError: (data) => {
        alert(data + " there was an error");
      },
    }
  );
};

export default useUpdateSpend;
