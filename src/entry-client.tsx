import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Router } from "./router";
import { store } from "./store/store";
import "../i18n";

ReactDOM.hydrateRoot(
  document.querySelector("#root") as HTMLElement,
  <BrowserRouter>
    <Provider store={ store }>
      <Router />
    </Provider>
  </BrowserRouter>
)
