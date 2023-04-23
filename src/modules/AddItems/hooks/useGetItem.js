import { useQuery } from "react-query";
import { getItem } from "../services/routes";

const useGetItem = (port) => {
  return useQuery(["item",port], async () => {
    const { data } = await getItem(port);
    return data;
  });
};

export default useGetItem;
