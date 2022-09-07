import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  findPlanetsFetch,
  findQueenFetch,
  getVehiclesFetch,
} from "../../../redux/falcone/reducer";
import { STATUS_CODE } from "../../../utils/constants";
import GameLayout from "../../layout/GameLayout/GameLayout";
import Destination from "../Destination/Destination";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state?.falconePersistReducer?.token);
  const [timeTaken, setTimeTaken] = useState(0);
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState([]);

  const callback = (response) => {
    if (response?.status === STATUS_CODE?.successful) {
      navigate(`/success/${timeTaken}/${response?.data?.planet_name}`);
    }
  };

  const findFalcone = () => {
    const data = {
      token: token,
      planet_names: selectedPlanets,
      vehicle_names: selectedVehicles,
    };
    dispatch(findQueenFetch({ token, data, callback }));
  };

  useEffect(() => {
    dispatch(findPlanetsFetch());
    dispatch(getVehiclesFetch());
  }, []);
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
            <Destination
              selectedPlanets={selectedPlanets}
              selectedVehicles={selectedVehicles}
              setSelectedPlanets={setSelectedPlanets}
              setSelectedVehicles={setSelectedVehicles}
              timeTaken={timeTaken}
              setTimeTaken={setTimeTaken}
            />
          </div>
          <div className="find-container">
            <button
              className={
                selectedPlanets?.length < 4 || selectedVehicles?.length < 4
                  ? "btn-disabled-class"
                  : "btn-class"
              }
              disabled={
                selectedPlanets?.length < 4 || selectedVehicles?.length < 4
              }
              onClick={() => findFalcone()}
            >
              Find Falcone
            </button>
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

export default Home;
