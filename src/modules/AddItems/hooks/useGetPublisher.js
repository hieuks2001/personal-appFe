import { useQuery } from "react-query";
import { getPublisher } from "../services/routes";

const useGetPublisher = (port) => {
  return useQuery(["publisher", port], async () => {
    const { data } = await getPublisher(port);
    return data;
  });
};

export default useGetPublisher;
