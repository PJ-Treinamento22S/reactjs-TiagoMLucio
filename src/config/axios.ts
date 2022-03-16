import axios from "axios";

const getApi = () => {
    const token =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDczODU3MTEsImV4cCI6MTY0NzQ3MjExMSwic3ViIjoiMDgyMmFiMTktMGNmZC00NWViLTgwNzMtNDNkNDAzYmZjMWZkIn0.FP0prtUBtldcDmQCwVoCXckFcxbW-fQUpmssGoQqOCg";
    const api = axios.create({
        baseURL: "https://piupiuwer.polijrinternal.com",
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (api.defaults.headers as any).Authorization = token;

    return api;
};

export default getApi;
