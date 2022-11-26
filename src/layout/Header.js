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
    <div className={(path==="/home"? "  transperant_cl absolute ": "brow_cl ") +` header_cus flex items-center z-50 flexbox ${fixedNavbar ? ' fixedNavbar' : ''}`}>
      <img src={Logo} className="pt-0 pb-0 ml-3 h-16 w-16" alt="logo" />
      <div className=" head_flex ">
        <Link to="/home">
            <div className={" text_size cursor pointer  hover:text_h_hover btn_hover hover:cursor-pointer hover:drop-shadow-2xl hover:animation "+ (path==="/home"? "  underline underline-offset-8 text_h_curr": "text_h ")} >
              TRANG CHỦ
            </div>
        </Link>
        <Link to="/services">
            <div className={" text_size cursor pointer hover:drop-shadow-2xl  py-1 hover:text_h_hover "+ (path==="/services"? "  underline underline-offset-8 text_h_curr": "text_h ")} >
              DỊCH VỤ THƯỜNG
            </div>
        </Link>
        <Link to="/services/premium">
            <div className={ "text_size cursor pointer hover:drop-shadow-2xl  py-1 hover:text_h_hover "+ (path==="/services/premium"? "  underline underline-offset-8 text_h_curr": "text_h ")} >
              DỊCH VỤ VIP
            </div>
        </Link>
       
      </div>
      {/* <Link to="/login">
            <div className={"text_size button_login  cursor pointer hover:drop-shadow-2xl  py-1 hover:text_h_hover "+ (path==="/login"? "  underline underline-offset-8 text_h_curr": "text_h ")} >
              ĐĂNG NHẬP
            </div>
        </Link> */}
      {
        <div className="mr-10 text-xs">
          Anh Duy
          <Link to="/out">
          <i class="fi fi-rr-exit"></i>
          {/* <img src={Logo} className="pt-0 pb-0 ml-3 h-16 w-16" alt="logo" /> */}
        </Link>
        </div>
      }
    </div>
  );
}

export default Header;