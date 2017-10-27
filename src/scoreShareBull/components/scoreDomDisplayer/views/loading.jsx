import React from 'react'
const loading = ({loadingTip}) => {
  return (
    <div className="full share-content loading">
      <div className="result-wrapper container-column">
        <div className="error-info">
          {loadingTip}
        </div>
      </div>
    </div>
  )
}

export default loading