import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
} from "@material-ui/icons";

const Profile = () => {
  return (
    <div className="profile">
      <div className="userTitleContainer">
        <h1 className="userTitle">Profile Page</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userShow">
        <div className="userShowTop">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQFK4UA28PmAig/profile-displayphoto-shrink_200_200/0/1642565209014?e=1658361600&v=beta&t=LYHcxAHSAEbRT9kcqalJ_lFazuXNVyuCKSBzadCfiKg"
            alt=""
            className="userShowImg"
          />
          <div className="userShowTopTitle">
            <span className="userShowUsername">Sandip Kurmi</span>
            <span className="userShowUserTitle">Software Engineer</span>
          </div>
        </div>
        <div className="userShowBottom">
          <span className="userShowTitle">Account Details</span>
          <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">sandip123</span>
          </div>
          <div className="userShowInfo">
            <CalendarToday className="userShowIcon" />
            <span className="userShowInfoTitle">04/04/2000</span>
          </div>
          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">12 34 65978</span>
          </div>
          <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle">sandip123@gmail.com</span>
          </div>
          <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowInfoTitle">ahmedabad odhav</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
