import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo.png";
import admin from "../../../assets/images/admin.png";
import chat from "../../../assets/images/icon-chat.png";
import chatActive from "../../../assets/images/icon-chat-active.png";
import notification from "../../../assets/images/icon-notification.png";
import notificationActive from "../../../assets/images/icon-notification-active.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null); // State for active icon

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  const getIconSrc = (icon) => {
    switch(icon) {
      case 'chat':
        return activeIcon === 'chat' ? chatActive : chat;
      case 'notification':
        return activeIcon === 'notification' ? notificationActive : notification;
      default:
        return admin;
    }
  };

  return (
    <div className='border'>
      <div className="w-full h-auto py-5 px-5 bg-white justify-between items-center flex">
        <Link to="">
          <img className="h-8" src={logo} alt="Logo" />
        </Link>
        <div className="flex items-center gap-5">  
          <div className="hidden sm:flex items-center gap-20">
            <Link to="chatbot" onClick={() => handleIconClick('chat')}>
              <img className="h-7" src={getIconSrc('chat')} alt="Chat" />
            </Link>
            <Link to="notification" onClick={() => handleIconClick('notification')}>
              <img className="h-7" src={getIconSrc('notification')} alt="Notification" />
            </Link>
            <Link className="rounded">
              <img className="h-9" src={getIconSrc('admin')} alt="Admin" />
            </Link>
          </div>
          <button className="block sm:hidden" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`sm:hidden flex justify-center bg-white py-4 gap-5 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <Link to="chatbot" onClick={() => handleIconClick('chat')}>
          <img className="h-7" src={getIconSrc('chat')} alt="Chat" />
        </Link>
        <Link to="notification" onClick={() => handleIconClick('notification')}>
          <img className="h-7" src={getIconSrc('notification')} alt="Notification" />
        </Link>
        <Link className="rounded">
          <img className="h-9" src={getIconSrc('admin')} alt="Admin" />
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
