import React from "react";
import { background, home1, home2, home3, home4 } from "../../assets/imgs";
import "./home.css";
import ButtonCT from "./../../components/buttonCT/ButtonCT";
//import { FaBeer } from "react-icons/fa";

const Home = () => {
  console.log(process.env.REACT_APP_API_ENDPOINT);

  return (
    <div className ="parent">
    {/* slide show */}
    <div className ="mb-16">
      
      <div className="z-10"><img src={background} alt="" className="m-24 pb-24 p-0 absolute "/></div>
      <div className="mt-60 z-10 text-5xl font-bold absolute text-center text-justify h1_cus">Biến ngôi nhà của bạn thành một khu vườn, tại sao không?</div>
      <div className="absolute z-10 div1_cus mt-1 pt-1 center">
      <ButtonCT className="btn_cus" outlineBtn primary>
        Thiết kế ngay
      </ButtonCT>
      </div>
      <div className="bg-black bg_cover opacity-50 -z-40"><img src={background} alt="" className="m-auto p-0 h-full w-full bg-black"/></div>
      
    </div>
    {/* Các Thành phẩm  */}
    < div className ="mb-12 pt-16 mt-16 justify-center ml-auto w-full justify-between">
{/* 1 thành phẩm */}
      <div className="flex">
        <img src={home1} alt="" className="ml-40 p-0 absolute flex w-[600px] h-[450px]"/>
        <div className="pt-24 absolute text-3xl text_bold flex ml-[1000px] w-96 h-5">Design</div>
        <div className="pt-36 text-2xs flex ml-[1000px] mb-80 w-96 h-60">Ranging from cyber security, programing to trivia, math, logic puzzles Challenging yet fun and entertain puzzles are waiting for you. Learn various skills and knowlegde along the way.
        <div className=""> </div>
        </div>
      </div>  
      {/* 1 thành phẩm */}
      <div className="flex">
        <img src={home2} alt="" className="ml-[800px] p-0 absolute flex w-[600px] h-[450px]"/>
        <div className="pt-24 absolute text-3xl text_bold flex ml-40 w-96 h-5">Design</div>
        <div className="pt-36 text-2xs flex ml-40 mb-80 w-96 h-60">Ranging from cyber security, programing to trivia, math, logic puzzles Challenging yet fun and entertain puzzles are waiting for you. Learn various skills and knowlegde along the way.
        </div>
      </div>  
      {/* 1 thành phẩm */}
      <div className="flex">
        <img src={home3} alt="" className="ml-40 p-0 absolute flex w-[600px] h-[450px]"/>
        <div className="pt-24 absolute text-3xl text_bold flex ml-[1000px] w-96 h-5">Design</div>
        <div className="pt-36 text-2xs flex ml-[1000px] mb-80 w-96 h-60">Ranging from cyber security, programing to trivia, math, logic puzzles Challenging yet fun and entertain puzzles are waiting for you. Learn various skills and knowlegde along the way.
        </div>
      </div>  
    </ div>
    </ div>
  );
};

export default Home;
