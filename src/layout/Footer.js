import React from "react";
import { MdCopyright } from "react-icons/md";
import Logo from "../assets/imgs/logoNoBg.png";
import { Link } from "react-router-dom";
import "./layout.css";
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

const Footer = () => {
  return (
    <div className="relative w-full bottom-0 mt-52">
      <div className="flex justify-around bg-color  h-80 w-full pt-24">
        <div className="text-slate-600">
          <Link to="/" className="block">
            <img src={Logo} className=" p-0 h-16 w-16" alt="dsds" />
          </Link>

          <Link to="/" className="block my-1 hover:text-cyan-500 text-xs">
            <span className="">LaslesVPN </span>
            Nền tảng chia sẻ Tài liệu và Làm bài
          </Link>

          <Link to="/thiThu" className="block my-1 hover:text-cyan-500 text-xs">
            Thi thử dành cho sinh viên
          </Link>

          <p className="block m-7 text-slate-400">
            <MdCopyright className="inline-block" />
            2022Lasles
            <span className="">VPN</span>
          </p>
        </div>

        <div className="flex justify-around">
          <div className="min-w-[16em]">
            <h3 className="ml-2 mb-2 font-bold text-xs text-slate-800">
              Tài liệu
            </h3>
            <ul className="text-slate-600">
              <li className="m-1 ">
                <Link to="/taiLieu" className="hover:text-cyan-500 text-xs">
                  Hướng dẫn lấy tài liệu
                </Link>
              </li>
              <li className="m-1">
                <Link to="/thiThu" className="hover:text-cyan-500 text-xs">
                  Hướng dẫn thi thử
                </Link>
              </li>
            </ul>
          </div>

          <div className="min-w-[10em]">
            <h3 className="ml-2 mb-2 font-bold text-xs text-slate-800">SLST</h3>
            <ul className="text-slate-600">
              <li className="m-1">
                <Link to="/about" className="hover:text-cyan-500 text-xs">
                  Chúng tôi
                </Link>
              </li>
              <li className="m-1">
                <Link to="/" className="hover:text-cyan-500 text-xs">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="flex justify-center w-full z-20">
        <div
          className="flex absolute top-[-160px] p-14 bg-white 
                    shadow-md shadow-slate-600 rounded-md"
        >
          <div className="max-w-md">
            <h2 className="font-bold text-base leading-10">
              Hãy biến ngôi nhà của bạn thành khu vườn, tại sao không?
            </h2>
            <p className="my-1 font-normal text-slate-600 text-base">
              Làm việc cùng chúng tôi, những người có cùng đam mê
            </p>
          </div>

          <a href="" className="flex-1 ml-40 my-auto  ">
            <Button content="Liên hệ admin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
