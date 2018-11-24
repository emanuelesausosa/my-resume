import sendRequest from "./sendRequest";

const BASE_PATH = "/api/experience";

export const getAll = () =>
  sendRequest(`${BASE_PATH}`, {
    method: "GET"
  });

export const getFirst = () =>
  sendRequest(`${BASE_PATH}/1`, {
    method: "GET"
  });
