import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Header">
        <div className="Sidebar_header_left">
          <Avatar
            src="https://wallpaperaccess.com/full/5113.jpg"
            style={{ marginLeft: 4 }}
          />
        </div>
        <div className="Sidebar_header_right">
          <IconButton>
            <DonutLargeIcon style={{ fontSize: 24, color: "#B1B3B5" }} />
          </IconButton>
          <IconButton>
            <ChatIcon style={{ fontSize: 24, color: "#B1B3B5" }} />
          </IconButton>
          <IconButton>
            <MoreVertIcon
              style={{ fontSize: 24, color: "#B1B3B5", marginRight: 10 }}
            />
          </IconButton>
        </div>
      </div>
      <div className="Search_Container">
        <div className="Search_bar">
          <SearchIcon style={{ fontSize: 20, color: "#828689" }} />
          <input
            placeholder="Search or start new chat"
            className="Search_input"
          />
        </div>
      </div>
      <div className="Sidebar_Chat_Container">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
