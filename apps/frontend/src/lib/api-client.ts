import axios from "axios";

const backendUrl = (
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3001"
).replace(/\/+$/, "");

export const apiClient = axios.create({
  baseURL: `${backendUrl}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30_000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (!axios.isAxiosError(error)) return Promise.reject(error);

    const message = error.response?.data?.message as
      | string
      | string[]
      | undefined;
    const normalizedMessage = Array.isArray(message) ? message[0] : message;

    return Promise.reject(
      new Error(
        normalizedMessage ??
          (error.response
            ? "Không thể kết nối với trợ lý AI."
            : "Không thể kết nối đến máy chủ."),
      ),
    );
  },
);
