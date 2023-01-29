import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Inbox.css";
import { CSSTransition } from "react-transition-group";

const Inbox = () => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("/api/messages");
      const json = await response.json();

      if (response.ok) {
        setMessages(json);
      }
    };

    fetchMessages();
  }, []);

  return (
    <CSSTransition in={true} timeout={300}>
      <div className="Inboxpage page">
        <h2 className="pageTittle">INBOX</h2>
        {messages &&
          messages.map((message) => (
            <div className="msgs-container">
              <Link to={`/messages/${message._id}`} key={message._id}>
                <div className="single-mesg" >
                  <h3 className="msg-subject">{message.subject}</h3>
                  <p className="msg-content">{message.content}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </CSSTransition>
  );
};

export default Inbox;
