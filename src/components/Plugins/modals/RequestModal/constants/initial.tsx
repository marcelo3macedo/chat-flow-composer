import type { RequestData } from "../types/data";

export const initialObj = {
    url: "",
    type: "GET",
    headers: [{ id: Date.now().toString(), key: "", value: "" }],
    body: "",
    resultVariable: "",
} as RequestData;