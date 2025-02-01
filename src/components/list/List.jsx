import React from "react";
import "./List.css";
import UserInfo from "./userinfo/UserInfo";
import ChatList from "./chatlist/Chatlist";

const List = () => {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
