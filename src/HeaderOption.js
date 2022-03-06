import React from 'react'
import "./HeaderOption.css"
import {Avatar} from "@material-ui/core"

export default function HeaderOption({Icon, title, avatar}) {
  return (
    <div className="headerOption">
        {/* If I pass the Icon, only then should I render Icons itself as a component*/}
        {Icon &&
            <Icon className="headerOption__" />}
            
        {avatar && (
            <Avatar className="headerOption__icon" src={avatar} />
        )}
        <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}
