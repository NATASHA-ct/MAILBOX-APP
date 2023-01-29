import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";
import "./Home.css";
// import axios from "axios";


const Home = () => {

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
      <div className="homepage page">
        <h1>
          <FiMail />
        </h1>
        <h2>Hello PERSON</h2>
        <p>You have 3 unread messages out of 10</p>
        <Link to="/Inbox" className="toInbox">
          <button>View Messages</button>
        </Link>
      </div>
    </CSSTransition>
  );
}

export default Home
