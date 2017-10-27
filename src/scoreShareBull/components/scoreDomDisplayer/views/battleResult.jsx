import React from 'react'
import PlayerLabel from './playerLabel'
const battleResult = ({gameData, fetchError}) => {
  console.log('battleResult, 显示战绩dom结构', gameData)
  const { room, finishList } = gameData
  var gameName
  switch (room.gameType) {
    case 1:
      gameName = '经典牛牛'
      break;
    case 2:
      gameName = '斗公牛'
      break;
    case 3:
      gameName = '红中麻将'
      break;
    default:
      break;
  }
  const roomDescribe = JSON.parse(room.roomDescribe)
  const ruleName = roomDescribe.ruleType === 0 ? `${roomDescribe.turns}轮庄` : `${roomDescribe.turns * 15}局`
  const ruleDesc = `明${roomDescribe.showCardCount},${ruleName}`
  const createTime = window.util.getDateTime(room.createTime)
  const chunkedFinishList = window._.chunk(finishList, 3)
  return (
    <div id="share" className="full share-content">
      <div className="result-title">
        <div style={{color: '#aa6727'}}>帅帅游戏   <span>{gameName}</span> 
          <span className="pull-right">{createTime}</span></div>
        <div style={{color: '#f8e5c1'}} className="mt-5">房号: <span>{room.roomNo}</span>
          &nbsp;&nbsp;局数:<span>{room.turns}</span>/<span>{room.totalTurns}</span>
          <span className="pull-right">玩法: <span>{ruleDesc}</span></span></div>
      </div>
      <div className="result-wrapper container-column">
        {chunkedFinishList.map(function(row, index) {
          return <div className="row flex-1 container mt-5" key={index}>
            {row.map(function(element) {
              return <PlayerLabel key={element.uid} info={element}></PlayerLabel>
            })}
          </div>
        })}
        
        {fetchError 
          ? <div className="error-info">
            <span v-text="errorInfo"></span>
          </div>
          : null}
      </div>
      <span className="tip-text">游戏结果仅作娱乐用途,禁止用于赌博行为</span>
      <div className="btn-area weui-flex">
        <div className="img-btn weui-flex__item">
          <img className="text-img" src="img/scoreShareBull/score/back-room.png" alt=""/>
        </div>
        <div className="weui-flex__item">
          <img className="text-img" src="img/scoreShareBull/btn-share.png" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default battleResult