import React from 'react'
import "./Header.css"
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';


function Header() {
  return (
    <div className="header">

        <div className="header__left">
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin-icon"/>
            <div className="header__search">
                <SearchIcon />
                
                <input type="text" />
            </div>

        </div>

        <div className="header__right">
            <HeaderOption title="Home" Icon={HomeIcon}/>
            <HeaderOption title="My network"  Icon={SupervisorAccountIcon}/>
            <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
            <HeaderOption title="Messaging" Icon={ChatIcon}/>
            <HeaderOption title="Notifications"  Icon={NotificationsIcon}/>
            <HeaderOption avatar="https://img.icons8.com/color/48/000000/linkedin.png"  title="" />

        </div>

    </div>
  )
}

export default Header