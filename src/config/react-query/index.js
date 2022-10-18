import { QueryClient } from "react-query";
import { toast } from "react-toastify";

export const configReactQuery = ({ store = {} }) => {
    const qc = new QueryClient();
    qc.setDefaultOptions({
        queries: {
            retry: (retry, err) => {
                //
                if (err?.response?.status === 401) return false;
                if (retry > 3) return false;
                return true;
            },
            onError: (error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    if (error?.response?.status === 401)
                        // return store?.dispatch(logout(qc.removeQueries("user")));
                        return error.response?.data?.message;
                    //
                    //
                    //
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    //
                } else {
                    // Something happened in setting up the request that triggered an Error
                    //
                }
            },
            refetchOnWindowFocus: false,
        },
        mutations: {
            retry: false,

            onSuccess: (data) => {
                toast.success(data?.message || "Thành công");
            },
            onError: (e) => {
                toast.error(
                    (Array.isArray(e?.response?.data?.message)
                        ? e?.response?.data?.message?.[0]
                        : e?.response?.data?.message) ||
                    e?.message ||
                    "Có lỗi xảy ra, vui lòng thử lại"
                );
            },
        },
    });
    return qc;
};