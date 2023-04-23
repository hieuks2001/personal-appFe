import { useMutation, useQueryClient } from "react-query";
import { deleteItem } from "../services/routes";
import { useAppSelector } from "../../../hooks/reduxHook";

const useDeleteItem = (port) => {
  const queryClient = useQueryClient();
  const token = useAppSelector((state) => state.auth.user);

  return useMutation(
    port,
    async (id) => {
      const { data } = await deleteItem(port, token, id);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("item");
      },
      onError: (data) => {
        alert(data + " there was an error");
      },
    }
  );
};

export default useDeleteItem;
