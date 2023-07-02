import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'

import { Router } from './router'

import { store } from './redux/store'


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
