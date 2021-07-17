import React from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="Chat_Container">
      <div className="Sidebar_header_left">
        <Avatar
          src="https://wallpaperaccess.com/full/5113.jpg"
          className="Avatar"
          style={{ height: "50px", width: "50px" }}
        />
      </div>
      <div className="Message">
        <h1>Chat Name</h1>
        <p>This was the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
