import React from "react";
import GameLayout from "../../layout/GameLayout/GameLayout";
import Destination from "../Destination/Destination";

const Home = () => {
  return (
    <GameLayout>
      <div className="home-container">
        <div className="game-container">
          <div>
            <h1 className="game-heading">
              Select planets you want to search in :
            </h1>
          </div>
          <div className="destination-container">
            <Destination />
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

export default Home;
