import React from "react";
import background from "../../../assets/images/background.svg";

const Header = () => {
  return (
    <>
      <header className="header-div">
        <a href="#" className="logo">
          Finding Falcone
        </a>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Reset</a>
          </li>
          <li>
            <a href="https://www.geektrust.com/">GeekTrust|Home</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
