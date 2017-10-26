function requestData() {
  return {
    type: 'REQUEST_DATA'
  }
}

function receiveData(data) {
  return {
    type: 'RECEIVE_DATA',
    data
  }
}

const fetchPosts = (dispatch, getState) => {
  dispatch(requestPosts())
  return fetch(`ffff`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
}

export { fetchPosts }