export const ROUTE = {
  login: "/login",
  entercode: "/entercode",
  forgotpassword: "/forgotpassword",
  changepassword: "/changepassword",
  signup: "/register",
  home: "/home",
};

export const TYPE = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
  EMAIL: "EMAIL",
  DEVICE_TYPE: 0,
};

export const STATUS_CODE = {
  successful: 200,
  badRequest: 400,
  unAuthorized: 401,
  forbidden: 403,
  notFound: 404,
};

export const FORMIK_REGEX = {
  PASSWORD_REGEX:
    /^.*(?=.{6})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  ALPHA_REGEX: /^[a-zA-Z\s]*$/g,
  ALPHA_NUMERIC_REGEX: /^[a-zA-Z\s]*$/,
  NUMERIC_REGEX: /^[1-9]+[0-9]*$/,
  EMAIL_REGEX: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
};
