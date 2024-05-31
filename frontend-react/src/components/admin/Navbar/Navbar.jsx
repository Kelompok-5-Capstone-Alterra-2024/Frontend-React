import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo.png"
import admin from "../../../assets/images/admin.png"
import chat from "../../../assets/images/icon-chat.png"
import message from "../../../assets/images/icon-message.png"
import notification from "../../../assets/images/icon-notification.png"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="w-full h-auto py-5 px-5 bg-white shadow justify-between items-center flex">
        <Link to="/">
          <img className="h-8" src={logo} alt="Logo" />
        </Link>
        <div className="flex items-center gap-5">  
          <div className={`sm:flex items-center gap-5 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <Link to="/chat">
              <img className="h-7 mb-1" src={chat} alt="Chat" />
            </Link>
            <Link to="/message">
              <img className="h-7 mb-1" src={message} alt="Message" />
            </Link>
            <Link to="/notification">
              <img className="h-7 mb-1" src={notification} alt="Notification" />
            </Link>
            <Link to="/">
              <img className="h-9" src={admin} alt="Admin" />
            </Link>
          </div>
          <button className="block sm:hidden" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar;
