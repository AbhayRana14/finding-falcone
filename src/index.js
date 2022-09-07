import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./redux/store";
import "./index.scss";
import "@progress/kendo-theme-default/dist/all.css";  
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </PersistGate>
);
reportWebVitals();
