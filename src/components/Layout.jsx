import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
  const [savedPosts, setSavedPosts] = useState(() => {
    const saved = localStorage.getItem("savedPosts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedPosts", JSON.stringify(savedPosts));
  }, [savedPosts]);

  return (
    <>
      <Nav />
      <Outlet context={{ savedPosts, setSavedPosts }} />
      <Footer/>
    </>
  );
};

export default Layout;
