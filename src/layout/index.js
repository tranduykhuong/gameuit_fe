import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => (
  <>
    <div style={{ backgroundColor: "#fff" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  </>
);

export default Layout;
