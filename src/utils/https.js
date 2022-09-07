import axios from "axios";

/** Format URL */
const formatUrl = (url, params) => {
  const param =
    params && Object.keys(params)?.length > 0
      ? `?${new URLSearchParams(params).toString()}`
      : "";
  return `${url}${param}`;
};

const instance = axios.create({
  headers: {
    accept: "aplication/json",
  },
});

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
export const httpGet = async (url, header, params = {}) =>
  new Promise((resolve) => {
    instance
      .get(formatUrl(url, params), {
        headers: {
          Authorization: header,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });

export const httpPut = (url, header, data, params = {}) =>
  new Promise((resolve) => {
    instance
      .put(formatUrl(url, params), data, {
        headers: {
          Authorization: header,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });

/** PATCH Request */
export const httpPatch = (url, header, data, params = {}) =>
  new Promise((resolve, reject) => {
    instance
      .patch(formatUrl(url, params), data, {
        headers: {
          Authorization: header,
        },
      })
      .then((res) => {
        resolve(res?.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });

/** DELETE Request */
export const httpDelete = (url, header, data, params = {}) =>
  new Promise((resolve, reject) => {
    instance
      .delete(formatUrl(url, params), {
        data,
      })
      .then((res) => {
        resolve(res?.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
