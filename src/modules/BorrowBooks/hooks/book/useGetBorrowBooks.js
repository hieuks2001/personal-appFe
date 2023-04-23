import { useQuery } from "react-query";
import { getUserBorrowBooks } from "../../services/routes";

const useGetBorrowBooks = (id) => {
  return useQuery([id,"userBorrowBooks"], async () => {
    const { data } = await getUserBorrowBooks(id);
    return data;
  });
};

export default useGetBorrowBooks;
