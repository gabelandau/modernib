import React from 'react'
import './InfoBox.scss'

function InfoBox(props) {
  return (
    <div className="InfoBox">
      <div className="title">
        <p>{props.title}</p>
      </div>
      <div className="body">
        {props.body.map(line => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  )
}

export default InfoBox
