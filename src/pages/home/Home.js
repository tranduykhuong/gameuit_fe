import React from "react";
import { background, home1, home2, home3, home4 } from "../../assets/imgs";
import "./home.css";
import ButtonCT from "./../../components/buttonCT/ButtonCT";
import { Link } from "react-router-dom";
//import { FaBeer } from "react-icons/fa";
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
const Home = () => {
  console.log(process.env.REACT_APP_API_ENDPOINT);

  return (
    <div className ="parent">
    {/* slide show */}
    <div className ="mb-5">
      
      <div className="z-10 absolute "><img src={background} alt="" className="m-24 mb-48 pb-24 p-0 w-[1200px] ml-44 "/></div>
      <div className="z-20 text-5xl font-bold absolute text-center text-justify h1_cus  shadow-2xl ">COVER GREEN - NỀN TẢNG GIẢI PHÁP CÂY XANH</div>
      <div className="absolute z-10 div1_cus mt-1 pt-1 center">
        <Link to="/services">
      <ButtonCT className="btn_cus blue_btn" outlineBtn primary>
        Thiết kế ngay
      </ButtonCT>
      </Link>
      </div>
      <div className="z-0 relative"><img src={background} alt="" className="m-auto p-0 h-full w-full brightness opacity-50"/></div>
      
    </div>
    {/* Các Thành phẩm  */}
    < div className ="mb-24 pt-8 mt-8 justify-center ml-auto w-full justify-between">
    <div className="text-[40px] mb-16 text_bold justify-center green text-center mx-auto justify-between w-full">Biến ngôi nhà của bạn thành khu vườn, tại sao không?</div>
{/* 1 thành phẩm */}
      <div className="flex">
        <img src={home1} alt="" className="ml-40 p-0 absolute flex w-[600px] h-[450px]"/>
        <div className="pt-24 absolute text-3xl text_bold flex ml-[1000px] w-[600] h-5">Đơn giản ... trở thành điểm nhấn?</div>
        <div className="pt-36 text-2xs flex ml-[1000px] mb-80 w-96 h-60">COVER GREEN thiết kế những góc nhỏ đơn sơ của ngôi nhà bạn trở thành điểm nhấn bởi màu xanh thanh thoát ấn tượng và hài hòa.
        </div>
      </div>  
      {/* 1 thành phẩm */}
      <div className="flex">
        <img src={home2} alt="" className="ml-[800px] p-0 absolute flex w-[600px] h-[450px]"/>
        <div className="pt-24 absolute text-3xl text_bold flex ml-40 w-[600] h-5">Ngày bình yên</div>
        <div className="pt-36 text-2xs flex ml-40 mb-80 w-96 h-60">Từ những cây xanh giản dị mà tinh tế, COVER GREEN luôn hướng đến mục tiêu tạo đến những không gian xanh tạo nên cảm giác yên bình, thư thản khi nghỉ ngơi trong ngôi nhà của mình sau những giờ làm việc căng thẳng.
        </div>
      </div>  
      {/* 1 thành phẩm */}
      <div className="flex">
        <img src={home3} alt="" className="ml-40 p-0 absolute flex w-[600px] h-[450px]"/>
        <div className="pt-24 absolute text-3xl text_bold flex ml-[1000px] w-[600] h-5">Nơi trong lành</div>
        <div className="pt-36 text-2xs flex ml-[1000px] mb-80 w-96 h-60">Không chỉ đơn thuần là trang trí, những cây xanh COVER GREEN mang đến ngôi nhà của bạn luôn từng giây phút làm không khí trở nên trong lành.
        </div>
      </div>  
    </ div>
    </ div>
  );
};

export default Home;
