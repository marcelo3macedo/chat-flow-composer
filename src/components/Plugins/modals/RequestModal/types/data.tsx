export type RequestData = {
  url: string;
  type: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers: { id: string; key: string; value: string }[];
  body: string;
  resultVariable: string;
};