import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import OffcanvasNav from "./OffcanvasNav";

function Base(props) {
  return (
    <div>
      <Header />
      <OffcanvasNav/>
      {props.children}
      <Footer />
    </div>
  );
}

export default Base;
