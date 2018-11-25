import sendRequest from "./sendRequest";

const BASE_PATH = "/api/education";

export const getAll = () =>
  sendRequest(`${BASE_PATH}`, {
    method: "GET"
  });
