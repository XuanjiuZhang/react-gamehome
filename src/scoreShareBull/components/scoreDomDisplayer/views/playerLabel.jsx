import React from 'react'
const playerLabel = ({info}) => {
  console.log('pl')
  function filterNickName(value) {
    if (!value) { return '' }
    if (value.length > 4) {
      return value.substring(0, 3) + '...'
    }
    return value
  }
  const filteredNickName = filterNickName(info.nickname)
  const pointClass = info.point > 0 ? 'win' : ''
  return (
    <div className="am-u-sm-4 record-wrapper">
      {info.point > 0 ? <img src="img/scoreShareBull/light-di.png" className="score-bg" alt=""/>
        : <img src="img/scoreShareBull/default-di.png" className="score-bg" alt=""/>}
      {info.owner ? <img className="owner-label" src="img/scoreShareBull/owner.png" alt=""/> : null}
      <div className="id-label text-center container-column">
        <div className="flex-1" style={{'paddingTop': '10%'}}>{filteredNickName}</div>
        <div className="flex-1">
          <span>{info.lftId}</span>
        </div>
      </div>
      <div className="suit-label container-column">
        <div className="score-detail">
          <span className={pointClass}>{info.point}</span>
        </div>
      </div>
      {info.winner ? <img src="img/scoreShareBull/score/big-winner.png" className="big-winner" alt=""/> : null}
    </div>
  )
}

export default playerLabel