import React from 'react'
import "./Recent.css"

function Recent({topic}) {
  return (

    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>

  )
}

export default Recent