import React, { useEffect, useState } from 'react';
import useWindowEvent from '../hooks/useWindowEvent';
import { useLocation } from 'react-router-dom';
import Logo from "../assets/imgs/logo.jpg";

import './layout.css'
import { Link, Route } from 'react-router-dom';
function Button({ content }) {
  return (
    <div
      className="px-16 shadow min-h-min leading-[50px] text-lg
                        text-white font-semibold button-color max-w-sm rounded-tl-2xl rounded-br-2xl animate-bounce
                        hover:cursor-pointer button-color_hover hover:shadow-lg  hover:animate-none"
    >
      {content}
    </div>
  );
} 
const Header = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY < 1) {
      setFixedNavbar(true);
    }

    if (window.scrollY > 90) setFixedNavbar(true);
    else setFixedNavbar(false);
  };
  const router=useLocation();
  const path=router.pathname;

  useWindowEvent("scroll", handleScroll, window);

  return (
    <div className={(path==="/home"? "  transperant_cl absolute ": "brow_cl ") +` header_cus flex items-center z-50 justify-between ${fixedNavbar ? ' fixedNavbar' : ''}`}>
    {/* //<div className={`transperant_cl header flex items-center justify-between ${fixedNavbar ? 'fixedNavbar' : ''}`}> */}
    <img src={Logo} className="pt-0 pb-0 ml-3 h-16 w-16" alt="dsds" />
    {/* Navbar */}
    <div className="ml-[360px] flex z-50 items-center flex-1">
    <Link to="/home">
        <div className={"mr-20 z-50 flex items-center cursor pointer px-1.5 py-1 hover:text_h_hover btn_hover hover:cursor-pointer hover:drop-shadow-2xl hover:animation "+ (path==="/home"? "  underline underline-offset-8 text_h_curr": "text_h ")} >
TRANG CHỦ
        </div>
    </Link>
    <Link to="/services">
        <div className={"mr-20 flex z-50 items-center cursor pointer px-1.5 hover:drop-shadow-2xl  py-1 hover:text_h_hover "+ (path==="/services"? "  underline underline-offset-8 text_h_curr": "text_h ")} >
DỊCH VỤ THƯỜNG
        </div>
    </Link>
    <Link to="/services/premium">
        <div className={"mr-64 flex z-50 items-center cursor pointer px-1.5 hover:drop-shadow-2xl  py-1 hover:text_h_hover "+ (path==="/services/premium"? "  underline underline-offset-8 text_h_curr": "text_h ")} >
DỊCH VỤ VIP
        </div>
    </Link>
    <Link to="/login">
        <div className={"ml-1 flex z-50 items-center cursor pointer hover:drop-shadow-2xl  px-1.5 py-1 hover:text_h_hover "+ (path==="/login"? "  underline underline-offset-8 text_h_curr": "text_h ")} >
ĐĂNG NHẬP
        </div>
    </Link>
    </div>
    </div>
  );
}

export default Header;