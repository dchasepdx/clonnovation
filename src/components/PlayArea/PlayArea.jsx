import React from 'react'
import './playArea.css'

const PlayArea = ({ children }) => {
  return (
    <div className="play-area">
      {children}
    </div>
  )
}

export default PlayArea
