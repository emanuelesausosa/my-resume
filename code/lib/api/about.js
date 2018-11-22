import sendRequest from "./sendRequest";

const BASE_PATH = "/api/about";

export const getAll = () =>
  sendRequest(`${BASE_PATH}`, {
    method: "GET"
  });

export const getFirst = () =>
  sendRequest(`${BASE_PATH}/1`, {
    method: "GET"
  });
