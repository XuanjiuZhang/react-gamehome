import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import scoreManager from './components/scoreManager'

const mapStateToProps = (state) => {
  return {
    scenedata: 1,
  }
}

const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    goPrePage: () => {
      dispatch({
        type: 'GO_PRE_PAGE',
        payload: 1
      });
    },
    goNextPage: () => {
      console.log('goNextPage');
      dispatch({
        type: 'GO_NEXT_PAGE',
        payload: 2
      });
    }
  };
};

const manager = connect(
  mapStateToProps,
  mapDispatchToProps
)(scoreManager);

const manageStatus = (state = {}, action) => {
  // let {currentPageIndex, deltaX, deltaY} = state;
  switch (action.type) {
    case 'GO_PRE_PAGE':
      return Object.assign({}, state)
    default:
      return state;
  }
}

const gameInfo = (state = {}, action) => {
  // let {currentPageIndex, deltaX, deltaY} = state;
  switch (action.type) {
    case 'GO_PRE_PAGE':
      return Object.assign({}, state)
    default:
      return state;
  }
}

const reducer = combineReducers({ manageStatus, gameInfo });

let store = createStore(reducer);

const ProviderElement = React.createElement(Provider, {store}, React.createElement(manager))
// {/* <Provider store={store}>
//     <manager></manager>
//   </Provider> */}

ReactDOM.render(
  ProviderElement,
  document.getElementById('root'));