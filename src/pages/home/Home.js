import React from "react";
import { enjoyDev } from "../../assets/imgs";
import "./home.css";
import ButtonCT from "./../../components/buttonCT/ButtonCT";
import { FaBeer } from "react-icons/fa";

const Home = () => {
  console.log(process.env.REACT_APP_API_ENDPOINT);
  return (
    <>
      <h1 className="text-3xl font-bold">Home</h1>
      <img src={enjoyDev} alt="" className="m-auto p-6" />
      <ButtonCT className="mb-6" primary borderRadius small iconLeft={enjoyDev}>
        Submit
      </ButtonCT>
    </>
  );
};

export default Home;
