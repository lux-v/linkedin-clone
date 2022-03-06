import { Avatar } from '@material-ui/core'
import React from 'react'
import Recent from './Recent';
import './Sidebar.css';

function Sidebar() {
    const recentItem = (topic) => {
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    };

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://media.wired.com/photos/5bb6accf0abf932caf294b18/master/pass/waves-730260985.jpg" alt="backgroundimg" />
            <Avatar className="sidebar__avatar" />
            <h2>Luka Vuk</h2>
            <h4>luka.vuk0909@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you: </p>
                <p className="sidebar__statNumber"> 2,543</p>
                
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,448</p>
            </div>

            
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            <Recent topic="reactjs" />
            <Recent topic="programming" />
            <Recent topic="design" />
            <Recent topic="developer" />
        </div>
    </div>
  )
}

export default Sidebar