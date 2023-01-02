import React from 'react'
import './brushAnimation.css'
import splash from '../../assets/images/mavi-brush.png'

function BrushAnimation({ title }) {
  return (
    <div className="brush-animation-content">
      <div className="title-brush-content">{title}</div>
      <div className="brush">
        <p></p>
      </div>
    </div>
  )
}

export default BrushAnimation
