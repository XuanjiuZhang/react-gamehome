import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {DomDisplayer, reducer as domReducer} from './components/scoreDomDisplayer/index'

const finnalReducer = combineReducers({ domReducer })

let store = createStore(finnalReducer, applyMiddleware(thunk))

// const ProviderElement = React.createElement(Provider, {store}, React.createElement(manager))
// {/* <Provider store={store}>
//     <manager></manager>
//   </Provider> */}

ReactDOM.render(
  <Provider store={store}>
    <DomDisplayer></DomDisplayer>
  </Provider>,
  document.getElementById('root'));