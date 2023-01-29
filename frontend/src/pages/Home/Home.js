import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";
import "./Home.css";

const Home = () => {
  const [messages, setMessages] = useState(null);
  const [unreadMsg, setUnreadMsg] = useState(0);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("/api/messages");
      const json = await response.json();

      if (response.ok) {
        setMessages(json);
        setUnreadMsg(json.filter((message) => !message.isRead).length);
      }
    };

    fetchMessages();
  }, []);

  return (
    <CSSTransition in={true} timeout={300}>
      <div className="homepage page">
        <h1>Hello Person</h1>
        <p className="unreadMsg">
          <FiMail />You have {unreadMsg || 0} unread messages out of{" "}
          {messages?.length || 0}          
        </p>
        <Link to="/Inbox" className="toInbox">
          <button>View Messages</button>
        </Link>
      </div>
    </CSSTransition>
  );
};

export default Home;
