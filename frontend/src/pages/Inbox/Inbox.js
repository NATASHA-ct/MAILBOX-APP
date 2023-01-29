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

  
    const handleMarkAsRead = async (messageId) => {
      try {
        const response = await fetch(`/api/messages/${messageId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isRead: true }),
        });
        const json = await response.json();

        if (response.ok) {
          setMessages((prevMessages) =>
            prevMessages.map((message) =>
              message._id === messageId ? json : message
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <CSSTransition in={true} timeout={300}>
        <div className="Inboxpage page">
          <h2 className="pageTittle">INBOX</h2>
          {messages &&
            messages.map((message) => (
              <div className="msgs-container">
                <Link
                  to={`/messages/${message._id}`}
                  key={message._id}
                  className={message.isRead ? "" : "unread"}
                  onClick={() => handleMarkAsRead(message._id)}
                >
                  <div className="single-mesg" key={message._id}>
                    <h3 className="msg-subject">{message.subject}</h3>
                    <p className="msg-content">
                      {message.content.substr(0, 25)}. . . . .
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </CSSTransition>
    );
  };


export default Inbox;
