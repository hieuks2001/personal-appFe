import "antd/dist/antd.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store/index";
import { configAxios } from "./config/axios/index";
import { configReactQuery } from "./config/react-query";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
configAxios();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const qc = configReactQuery({ store });

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={qc}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
