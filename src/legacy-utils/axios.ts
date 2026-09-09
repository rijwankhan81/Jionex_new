import axios, { AxiosPromise } from "axios";

const axiosClient = (token?: string) => {
    let config = { headers: {}, withCredentials: true };
    if (token) {
        config["headers"] = {
            Authorization: "Bearer " + token,
        };
    }
    return axios.create(config);
};

const axiosHandler = async (axios: AxiosPromise) => {
    return axios
        .then((res) => {
            return {
                data: res.data,
                success: true,
                status: res.status,
                message: res.statusText,
            };
        })
        .catch((err) => {
            if (!err.response) {
                return {
                    success: false,
                    status: err.status || 500,
                    error: err.message,
                    data: null,
                };
            } else {
                return {
                    status: err.status || 500,
                    success: false,
                    data: null,
                    error:
                        err.response?.data?.message ||
                        err.response?.data?.error ||
                        err?.message ||
                        "Something went wrong",
                };
            }
        });
};

const parseError = (response: any) => {
    return response.success
        ? "No Error"
        : response.error || response.message || "Something went wrong";
};

export { axiosClient, axiosHandler, parseError };
