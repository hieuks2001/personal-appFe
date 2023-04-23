import { useQuery } from "react-query";
import { getUserBorrow } from "../../services/routes";

const useGetBorrowBook = () => {
  return useQuery("userBorrow", async () => {
    const { data } = await getUserBorrow();
    return data;
  });
};

export default useGetBorrowBook;
