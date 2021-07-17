import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import InsertEmoticonSharpIcon from "@material-ui/icons/InsertEmoticonSharp";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";

function Chat() {
  return (
    <div className="Chat">
      <div className="Header_Title">
        <div className="Chat_Header_Left">
          <Avatar
            src="https://wallpaperaccess.com/full/5113.jpg"
            style={{ marginLeft: -7 }}
          />
        </div>
        <div className="Chat_Header_Middle">
          <h3>Chat Name</h3>
          <p>Vaibhav, Sakshi, Indra, Tanya, Tanisha</p>
        </div>
        <div className="Chat_Header_Right">
          <IconButton>
            <SearchIcon style={{ fontSize: 24, color: "#B1B3B5" }} />
          </IconButton>
          <IconButton>
            <MoreVertIcon style={{ fontSize: 24, color: "#B1B3B5" }} />
          </IconButton>
        </div>
      </div>
      {/* --------------------------Message Received-------------------------- */}
      <div className="Chat_body">
        <div className="Image_Backdrop">
          {/* <img
            src="https://www.enjpg.com/img/2020/abstract-12.jpg"
            style={{ height: 400, width: 200 }}
            className="Backdrop"
          /> */}

          <p className="Receiver_Message">
            I received this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          {/* --------------------------Message Sent-------------------------- */}
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="Sender_Message">
            I sent this message
            <span className="Chat_TimeStamp">{new Date().toUTCString()}</span>
          </p>
          {/* <img
          src="https://wallpaperaccess.com/full/48078.jpg"
          className="Image_check"
        /> */}
        </div>
      </div>
      <div className="SendMessage_Container">
        <IconButton>
          <InsertEmoticonSharpIcon style={{ color: "#989B9E", fontSize: 30 }} />
        </IconButton>
        <IconButton>
          <AttachFileIcon style={{ color: "#989B9E", fontSize: 30 }} />
        </IconButton>
        <form>
          <input className="Input" placeholder="Enter your message" />
        </form>

        <IconButton>
          <KeyboardVoiceIcon style={{ color: "#989B9E", fontSize: 30 }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
