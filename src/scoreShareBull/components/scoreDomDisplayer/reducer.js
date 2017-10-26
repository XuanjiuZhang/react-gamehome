import * as actions from './actions'
const domDisplayer = (state = {}, action) => {
  // let {currentPageIndex, deltaX, deltaY} = state;
  switch (action.type) {
    case 'GET_GAME_RESULT':
      return Object.assign({}, state)
    default:
      return state;
  }
}

export default domDisplayer

const mapStateToProps = (state) => {
  return {
    scenedata: 1,
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