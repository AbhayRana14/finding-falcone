import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import GameLayout from "../../layout/GameLayout/GameLayout";

const Success = () => {
  const { time, planet } = useParams();
  const navigate = useNavigate();
  return (
    <GameLayout>
      <div className="success-container">
        <div className="success-window">
          <h1>
            Success! Congratulations on finding Falcone. King Shan is mighty
            pleased.
          </h1>
          <h1>Time Taken : {time}</h1>
          <h1>Planet Found : {planet}</h1>
          <button onClick={() => navigate("/home")}>Start Again</button>
        </div>
      </div>
    </GameLayout>
  );
};

export default Success;
