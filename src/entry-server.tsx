import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { Router } from "./routers/Router";
import { store } from "./store/store";
import "../i18n";

interface IRenderProps {
  path: string;
}

export const render = ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={ path }>
      <Provider store={ store }>
        <Router />
      </Provider>
    </StaticRouter>
  )
}
