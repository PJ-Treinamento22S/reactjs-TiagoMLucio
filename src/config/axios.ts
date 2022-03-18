import axios from "axios";

const getApi = () => {
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDc1NTk0NzMsImV4cCI6MTY0NzY0NTg3Mywic3ViIjoiZTE3NjNhYzgtMmQwOS00MWI3LTkzYjctZDhiY2M3ZjJkZDcyIn0.wXXYdxyxzE2rK88xUWwcuqDHaBon0KIgOISoH494sjE";
    const api = axios.create({
        baseURL: "https://piupiuwer.polijrinternal.com",
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (api.defaults.headers as any).Authorization = `Bearer ${token}`;

    return api;
};

export default getApi;
