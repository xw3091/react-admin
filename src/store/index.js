import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as todoApp from './reducers'

const store = createStore(
    combineReducers({...todoApp}),
    applyMiddleware(thunk)
)

export default store