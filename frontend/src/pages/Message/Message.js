import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Message.css";



const Message = () => {
  const [message, setMessage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`/api/messages/${id}`);
      const json = await response.json();

      if (response.ok) {
        setMessage(json);
      }
    };

    fetchMessage();
  }, [id]);

  if (!message) {
    return <div>Loading...</div>;
  }

  return (
    <div className="msg-container">
      <h3 className="subject">{message.subject}</h3>
      <p className="content">{message.content}</p>
    </div>
  );
};

export default Message;
