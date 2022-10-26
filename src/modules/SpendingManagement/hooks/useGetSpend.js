import { useQuery } from "react-query";
import { getSpeding } from './../services/routes';

const useGetSpend = () => {
  return useQuery("spending", async () => {
    const { data } = await getSpeding();
    return data;
  });
};

export default useGetSpend;
