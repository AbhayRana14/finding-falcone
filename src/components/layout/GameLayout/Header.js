import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { exitGame } from "../../../redux/falcone/reducer";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
            <a href="/home">Reset</a>
          </li>
          <li>
            <a href="https://www.geektrust.com/">GeekTrust|Home</a>
          </li>
          <li>
            <a
              href=""
              onClick={() => {
                dispatch(exitGame());
                navigate("");
              }}
            >
              EXIT GAME
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
