import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  ShopTwoTone,
  AttachMoneyTwoTone,
  AssessmentTwoTone,
  EmailTwoTone,
  ForumTwoTone,
  ChatBubbleOutlineTwoTone,
  WorkTwoTone,
  ReportTwoTone,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidbarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidbarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidbarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidbarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidbarMenu">
          <h3 className="sidebarTitle">Quick menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidbarListItem active">
                <Person className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidbarListItem">
                <ShopTwoTone className="sidebarIcon" />
                Products
              </li>
            </Link>

            <li className="sidbarListItem">
              <AttachMoneyTwoTone className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidbarListItem">
              <AssessmentTwoTone className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidbarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidbarListItem active">
              <EmailTwoTone className="sidebarIcon" />
              Mail
            </li>
            <li className="sidbarListItem">
              <ForumTwoTone className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidbarListItem">
              <ChatBubbleOutlineTwoTone className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidbarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidbarListItem active">
              <WorkTwoTone className="sidebarIcon" />
              Manage
            </li>
            <li className="sidbarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidbarListItem">
              <ReportTwoTone className="sidebarIcon" />
              Repors
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;