import cogoToast from "cogo-toast";

class Toaster {
  success = (message) => {
    let options = { position: "bottom-right", heading: "Success" };
     message &&  cogoToast.success(message, options);
  };

  error = (message) => {
    let options = { position: "bottom-right", heading: "Error" };
     message &&  cogoToast.error(message, options);
  };

  warn = (message) => {
    let options = { position: "bottom-right", heading: "Warn" };
    message && cogoToast.warn(message, options);
  };

  info = (message) => {
    let options = { position: "bottom-right", heading: "Info" };
    message &&  cogoToast.info(message, options);
  };
}

export const toasts = new Toaster();
