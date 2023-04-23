import { useQuery } from "react-query";
import { getLibrary, getUserBorrowBooks } from "../../services/routes";

const useGetLibr = () => {
  return useQuery(["library"], async () => {
    const { data } = await getLibrary();
    return data;
  });
};

export default useGetLibr;
