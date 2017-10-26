import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {DomDisplayer, reducer as domReducer} from './components/scoreDomDisplayer/index'
import util, { screenOrientation } from '../lib/util'
window.util = util

const finnalReducer = combineReducers({ domReducer })

let store = createStore(finnalReducer, applyMiddleware(thunk))
const rootEle = document.getElementById('root')
if (rootEle.offsetHeight / rootEle.offsetWidth < 1.3) {
  let domHeight = document.body.offsetHeight
  console.log(rootEle.offsetHeight / rootEle.offsetWidth);
  rootEle.style.width = domHeight / 1.6 + 'px'
  rootEle.style.height = domHeight + 'px'
  rootEle.style.margin = 'auto'
  rootEle.style.position = 'relative'
}
screenOrientation(store.dispatch)
// const ProviderElement = React.createElement(Provider, {store}, React.createElement(manager))
// {/* <Provider store={store}>
//     <manager></manager>
//   </Provider> */}

ReactDOM.render(
  <Provider store={store}>
    <DomDisplayer></DomDisplayer>
  </Provider>,
  document.getElementById('root'));