import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import "../../style/Adminstyle/topbar.css"
import { NotificationImportantSharp, Language, Settings } from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function TopBar() {

  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft"><Link to={{pathname: '/'}}><img src="../images/ticketcorner.png"/></Link></div>
            <div className="topRight">
                <div className="topbarIconContainer">

                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">

                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">

                </div>
                <img src="" className='topAvatar'/>
            </div>
        </div>
    </div>
  )
}
