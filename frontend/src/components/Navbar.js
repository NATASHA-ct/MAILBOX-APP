import { FiMail } from "react-icons/fi";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <FiMail />
        MAILBOX
      </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">Unread Mails: 3</Link>
        <Link to="/Inbox">Inbox</Link>
      </div>
    </nav>
  );
};

export default Navbar;
