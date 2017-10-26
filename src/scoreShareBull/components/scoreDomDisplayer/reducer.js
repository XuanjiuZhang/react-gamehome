import * as actions from './actions'
const domDisplayer = (state = {}, action) => {
  // let {currentPageIndex, deltaX, deltaY} = state;
  switch (action.type) {
    case 'SCREEN_ORIEN_CHANGE':
      console.log('SCREEN_ORIEN_CHANGE', action)
      return Object.assign({}, state, { orientation: action.orientation })
    case 'REQUEST_DATA':
      console.log('REQUEST_DATA', action)
      return Object.assign({}, state, { loadingData: true })
    case 'RECEIVE_DATA':
      console.log('RECEIVE_DATA', action)
      if (action.data.result) {
        return Object.assign({}, state, { loadingData: false, fetchError: true, errorMsg: action.data.message })
      }
      return Object.assign({}, state, { loadingData: false, gameData: action.data })
    default:
      return state;
  }
}

export default domDisplayer

const mapStateToProps = (state) => {
  const { orientation, loadingData, fetchError, errorMsg, gameData = { finishList: [], room: {} } } = state.domReducer
  return {
    loadingData,
    gameData,
    fetchError,
    errorMsg,
    orientation
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // fetchData: () => {
    //   dispatch({
    //     type: 'GO_PRE_PAGE',
    //     payload: 1
    //   })
    // },
    fetchData: () => dispatch(actions.fetchPosts)
  }
}

export { mapStateToProps, mapDispatchToProps }