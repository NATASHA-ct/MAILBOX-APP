import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./Home.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {
  const [messages, setMessages] = useState(null);
  const [unreadMsg, setUnreadMsg] = useState(0);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("/api/messages", {
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setMessages(json);
        setUnreadMsg(json.filter((message) => !message.isRead).length);
      }
    };

    if (user) {
      fetchMessages();
    }
  }, [user]);

  return (
    <CSSTransition in={true} timeout={300}>
      {user ? (
        <div className="homepage page">
          <h1 className="helloTxt">Hello {user.name}! Welcome to MAILBOX</h1>
          
              {user.email === "admin@gmail.com" ? (
                <p className="unreadMsg">
                  You have {unreadMsg || 0} unread messages out of{" "}{messages?.length || 0}
                </p>
              ) : (
                  <p className="unreadMsg">
                      You have no messages
                  </p>
              )}
          
          <Link to="/Inbox" className="toInbox">
            <button className="btn">View Messages</button>
          </Link>
        </div>
      ) : (
        <div className="homepage page">
          <h1>Please log in to view your messages</h1>
        </div>
      )}
    </CSSTransition>
  );
};

export default Home;