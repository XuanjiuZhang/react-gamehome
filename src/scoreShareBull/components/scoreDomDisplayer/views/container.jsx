import React from 'react'
export default class Button extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() {
  }

  componentDidMount() {
    let pre 
    if (window.location.hostname.match(/10.10.10/)) {
      pre = 'http://10.10.10.107:8080/game-lobby'  
    } else if (window.location.hostname.match(/lefantian/)) {
      pre = 'http://lefantian.jiahuagame.com/game-lobby'
    } else {
      pre = 'http://c-c.jiahuagame.com/game-lobby'
    }
    function getQueryString (name) {
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
    const url = `${pre}/crowd/room/combat/${areaCode}/${gameNo}`
    const opt = {
      method: 'GET',
      headers: {
        Authorization: token
      }
    }
    this.loading = true
    fetch(url, opt).then(res => res.json()).then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <div>haha</div>
    )
  }
}