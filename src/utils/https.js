import axios from "axios";

/** Format URL */
const formatUrl = (url, params) => {
  const param =
    params && Object.keys(params)?.length > 0
      ? `?${new URLSearchParams(params).toString()}`
      : "";
  return `${url}${param}`;
};

/** POST Request */
export const httpPost = (url, header, data, params = {}) => {
  const modHeader = { accept: "application/json" };
  if (Object.keys(header).length) {
    modHeader["Authorization"] = header;
  }
  return new Promise((resolve) => {
    axios({
      method: "post",
      url: formatUrl(url, params),
      headers: modHeader,
      data: data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

/** GET Request */
export const httpGet = async (url, header, params = {}) => {
  const modHeader = { accept: "application/json" };
  if (Object.keys(header).length) {
    modHeader["Authorization"] = header;
  }
  return new Promise((resolve) => {
    axios({
      method: "get",
      url: formatUrl(url, params),
      headers: modHeader,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};
