import sendRequest from "./sendRequest";

const BASE_PATH = "/api/skill";

export const getAll = () =>
  sendRequest(`${BASE_PATH}`, {
    method: "GET"
  });
