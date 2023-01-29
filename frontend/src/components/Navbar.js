import { FiMail } from "react-icons/fi";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <FiMail />
        MAILBOX
      </h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">Unread Mails: 3</a>
        <a href="/Inbox">Inbox</a>
      </div>
    </nav>
  );
};

export default Navbar;
