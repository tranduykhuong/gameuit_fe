import React from "react";
import { background } from "../../assets/imgs";
import "./home.css";
import ButtonCT from "./../../components/buttonCT/ButtonCT";
//import { FaBeer } from "react-icons/fa";

const Home = () => {
  console.log(process.env.REACT_APP_API_ENDPOINT);

  return (
    <>
    {/* slide show */}
    <div classname ="">
      <div className="mt-60 text-3xl font-bold absolute text-center text-justify h1_cus">Biến ngôi nhà của bạn thành một khu vườn, tại sao không?</div>
      <img src={background} alt="" className="m-auto p-0 h-full w-full"/>
    </div>
    {/*  */}
      <ButtonCT className="mb-6" primary borderRadius small iconLeft={background}>
        Submit
      </ButtonCT>
    </>
  );
};

export default Home;
