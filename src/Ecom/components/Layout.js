import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Homepage from "./Homepage";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
