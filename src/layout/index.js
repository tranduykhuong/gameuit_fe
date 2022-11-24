import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => (
  <>
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  </>
);

export default Layout;
