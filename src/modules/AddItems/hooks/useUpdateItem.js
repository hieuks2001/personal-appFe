import { useMutation, useQueryClient } from "react-query";
import { updateItem } from "../services/routes";

const useUpdateItem = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (values) => {
      const { data } = await updateItem(values);
      return data;
    },
    {
      onSuccess: (data) => {
        console.log(data);
        alert('Thay đổi thành công!');
        queryClient.invalidateQueries("item");
      },
      onError: (data) => {
        alert(data + " there was an error");
      },
    }
  );
};

export default useUpdateItem;
