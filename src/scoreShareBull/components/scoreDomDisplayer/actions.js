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

function storeQueryStringData(queryInfo) {
  return {
    type: 'INIT_QUERYSTRING',
    queryInfo
  }
}

const fetchPosts = (dispatch, getState) => {
  const getQueryString = name => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return unescape(r[2])
    }
    return null
  }
  const token = getQueryString('token')
  const gameNo = getQueryString('gameNo')
  const areaCode = getQueryString('areaCode')
  dispatch(storeQueryStringData({ token, gameNo, areaCode }))
  dispatch(requestData())
  const opt = {
    method: 'GET',
    headers: {
      Authorization: token
    }
  }
  let pre
  if (window.location.hostname.match(/(10.10.10|localhost)/)) {
    // pre = 'http://10.10.10.107:8080/game-lobby'  
    pre = 'http://lefantian.jiahuagame.com/game-lobby'
  } else if (window.location.hostname.match(/lefantian/)) {
    pre = 'http://lefantian.jiahuagame.com/game-lobby'
  } else {
    pre = 'http://c-c.jiahuagame.com/game-lobby'
  }
  const url = `${pre}/crowd/room/combat/${areaCode}/${gameNo}`
  return fetch(url, opt)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveData(json))
    })
}

const orientationChange = (orientation) => (dispatch, getState) => {
  var rootEle = document.getElementById('root')
  console.log('orientationChange!!!!!!')
  console.log(rootEle)
  if (orientation === 'portrait' && rootEle.offsetHeight / rootEle.offsetWidth > 1.3) {
    rootEle.style.width = ''
    rootEle.style.height = ''
  } else {
    let domHeight = document.body.offsetHeight
    console.log(rootEle.offsetHeight / rootEle.offsetWidth);
    rootEle.style.width = domHeight / 1.6 + 'px'
    rootEle.style.height = domHeight + 'px'
    rootEle.style.margin = 'auto'
    rootEle.style.position = 'relative'
  }
  return dispatch({
    type: 'SCREEN_ORIEN_CHANGE',
    orientation
  })
}

export { fetchPosts, storeQueryStringData, orientationChange }