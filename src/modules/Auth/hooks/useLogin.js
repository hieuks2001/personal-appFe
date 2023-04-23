import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { login as LoginAction } from "../slices";
import { login } from "../services/auth";
import { useAppDispatch } from "../../../hooks/reduxHook";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return useMutation(
    async (resData) => {
      console.log(resData);

      return await login(resData);
    },
    {
      onSuccess: (data) => {
        dispatch(LoginAction(data.data));
        navigate("/");
      },
    }
  );
};

export default useLogin;
