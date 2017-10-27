import React from 'react'
const battleImg = ({canvas}) => {
  if (!canvas) {
    return (
      <div className="full">
      </div>
    )
  }
  const imgSrc = canvas.toDataURL('image/png')
  return (
    <div className="full-height">
      <img src={imgSrc} className="full-height" alt=""/>
    </div>
  )
}

export default battleImg