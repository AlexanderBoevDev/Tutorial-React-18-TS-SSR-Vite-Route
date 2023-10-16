import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Router } from "./routers/Router";
import { store } from "./store/store";
import { AuthProvider } from "./store/AuthContext";
import "../i18n";

ReactDOM.hydrateRoot(
  document.querySelector("#root") as HTMLElement,
  <AuthProvider>
    <BrowserRouter>
      <Provider store={ store }>
        <Router />
      </Provider>
    </BrowserRouter>
  </AuthProvider>
)
