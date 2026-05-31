const BASE =
  "http://127.0.0.1:8000";

const api = {
  async get(
    path: string,
    token?: string
  ) {
    const res =
      await fetch(
        `${BASE}${path}`,
        {
          headers: {
            Authorization:
              token
                ? `Bearer ${token}`
                : "",
          },
        }
      );

    const data =
      await res.json();

    return { data };
  },

  async post(
    path: string,
    body: any
  ) {
    const res =
      await fetch(
        `${BASE}${path}`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body:
            JSON.stringify(
              body
            ),
        }
      );

    const data =
      await res.json();

    return { data };
  },
};

export default api;