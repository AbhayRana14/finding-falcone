import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const GameLayout = ({ children }) => {
  return (
    <div className="game-layout-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default GameLayout;
