import { FiMail } from "react-icons/fi";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";


const Navbar = () => {

  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <h1 className="logo">
        <FiMail />
        MAILBOX
      </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Inbox">Inbox</Link>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
        <div>
          <button onClick={handleClick}>Log out</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
