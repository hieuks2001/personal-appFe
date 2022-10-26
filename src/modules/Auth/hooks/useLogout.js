import { useAppDispatch } from "../../../hooks/reduxHook";
import { useNavigate } from "react-router";
import { useMutation,useQueryClient } from "react-query";
import { message } from "antd"
import { logout } from "../services/auth";
import { logout as logoutAction } from "../slices/index";

const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      // await logout();
      await new Promise((resolve) => {
        resolve();
      });
    },
    {
      onSuccess: () => {
        dispatch(logoutAction());
        queryClient.removeQueries("user");
        navigate("/login", { replace: true });
      },
    }
  );
};

export default useLogout;
