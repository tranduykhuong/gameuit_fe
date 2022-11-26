import React, { useState } from "react";
import useWindowEvent from "../hooks/useWindowEvent";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/imgs/logo.jpg";
import "./layout.css";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import auth from "../store/auth";
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
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  const handleScroll = () => {
    if (window.scrollY < 1) {
      setFixedNavbar(true);
    }

    if (window.scrollY > 90) setFixedNavbar(true);
    else setFixedNavbar(false);
  };
  const router = useLocation();
  const path = router.pathname;

  useWindowEvent("scroll", handleScroll, window);

  return (
    <div
      className={
        (path === "/home" ? "  transperant_cl absolute " : "brow_cl ") +
        ` header_cus flex items-center z-50 flexbox ${
          fixedNavbar ? " fixedNavbar" : ""
        }`
      }
    >
      <img src={Logo} className="pt-0 pb-0 ml-3 h-16 w-16" alt="logo" />
      <div className=" head_flex ">
        <Link to="/home">
          <div
            className={
              " text_size cursor pointer  hover:text_h_hover btn_hover hover:cursor-pointer hover:drop-shadow-2xl hover:animation " +
              (path === "/home"
                ? "  underline underline-offset-8 text_h_curr"
                : "text_h ")
            }
          >
            TRANG CHỦ
          </div>
        </Link>
        <Link to="/services">
          <div
            className={
              " text_size cursor pointer hover:drop-shadow-2xl  py-1 hover:text_h_hover " +
              (path === "/services"
                ? "  underline underline-offset-8 text_h_curr"
                : "text_h ")
            }
          >
            DỊCH VỤ THƯỜNG
          </div>
        </Link>
        <Link to="/services/premium">
          <div
            className={
              "text_size cursor pointer hover:drop-shadow-2xl  py-1 hover:text_h_hover " +
              (path === "/services/premium"
                ? "  underline underline-offset-8 text_h_curr"
                : "text_h ")
            }
          >
            DỊCH VỤ VIP
          </div>
        </Link>
      </div>
      {!auth.isLoginSuccess() ? (
        <Link to="/login">
          <div
            className={
              "text_size button_login  cursor pointer hover:drop-shadow-2xl  py-1 hover:text_h_hover " +
              (path === "/login"
                ? "  underline underline-offset-8 text_h_curr"
                : "text_h ")
            }
          >
            ĐĂNG NHẬP
          </div>
        </Link>
      ) : (
        <div className="flex text-center">
          <p className="mr-10 text-sm font-normal text-white">Anh Duy</p>
          <FiLogOut
            onClick={handleLogout}
            className="text-2xl text-white cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
