import { createStore, applyMiddleware } from 'redux'
import Reducers from './reducers'
import thunk from 'redux-thunk'

import { createBrowserHistory } from "history"
import { routerMiddleware } from 'react-router-redux'

export const history     = createBrowserHistory()
const history_middleware = routerMiddleware(history)

const Store              = createStore(Reducers, applyMiddleware(thunk, history_middleware))

export default Store