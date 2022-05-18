import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">xsquare admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarIconContainer">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQFK4UA28PmAig/profile-displayphoto-shrink_200_200/0/1642565209014?e=1658361600&v=beta&t=LYHcxAHSAEbRT9kcqalJ_lFazuXNVyuCKSBzadCfiKg"
              alt=""
              className='topAvatar'
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Topbar;
