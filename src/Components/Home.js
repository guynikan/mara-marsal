import React from "react";
import { Link, useLocation } from "react-router-dom";
import Contact from "./Contact";
import EnterGallery from "./EnterGallery";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <EnterGallery />
    </>
  );
}

export default Home;
