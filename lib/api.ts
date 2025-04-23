"use server";

type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export async function callApi(method: HttpMethod, endpoint: string, body?: object) {
  const options: RequestInit = {
    method,
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(endpoint, options);
  const jsonBody = await response.json();

  return {
    response,
    data: jsonBody,
    ok: response.ok,
    status: response.status,
  };
}
