import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {DomDisplayer, actions, reducer as domReducer} from './components/scoreDomDisplayer/index'
import util, { screenOrientation } from '../lib/util'
window.util = util

const finnalReducer = combineReducers({ domReducer })

let store = createStore(finnalReducer, applyMiddleware(thunk))
screenOrientation(store.dispatch, actions.orientationChange)

ReactDOM.render(
  <Provider store={store}>
    <DomDisplayer></DomDisplayer>
  </Provider>,
  document.getElementById('root'));

document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
  // 通过下面这个API隐藏右上角按钮
  WeixinJSBridge.call('hideOptionMenu')
})