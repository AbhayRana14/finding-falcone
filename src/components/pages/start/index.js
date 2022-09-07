import React from "react";
import { useDispatch } from "react-redux";
import { getTokenFetch } from "../../../redux/falcone/reducer";


const Start = () => {
  const dispatch = useDispatch();

  const generateToken = () => {
    dispatch(getTokenFetch());
  };
  return (
    <div className="login-container">
      <div className="form">
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div className="form-inner">
          <h2>START GAME</h2>
          <div className="content">
            <button
              className="btn"
              type="submit"
              onClick={() => generateToken()}
            >
              Generate Token
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
