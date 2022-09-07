import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AssigneesComboBox } from "../../common/ComboBox/AssignessComboBox";

const Destination = ({
  selectedVehicles,
  selectedPlanets,
  setSelectedPlanets,
  setSelectedVehicles,
  timeTaken,
  setTimeTaken,
}) => {
  const planetsData = useSelector(
    (state) => state?.falconePersistReducer?.planetDetails
  );
  const vehiclesData = useSelector(
    (state) => state?.falconePersistReducer?.vehicleDetails
  );
  const [planets, setPlanets] = useState({
    option1: planetsData,
  });

  const [vehicles, setVehicles] = useState({
    option1: vehiclesData,
  });

  return (
    <>
      <div className="destination-box">
        <AssigneesComboBox
          destination={1}
          planets={planets?.option1}
          setPlanets={setPlanets}
          vehicles={vehicles?.option1}
          setVehicles={setVehicles}
          disabled={!planets?.option1?.length || !vehicles?.option1?.length}
          timeTaken={timeTaken}
          setTimeTaken={setTimeTaken}
          selectedPlanets={selectedPlanets}
          setSelectedPlanets={setSelectedPlanets}
          selectedVehicles={selectedVehicles}
          setSelectedVehicles={setSelectedVehicles}
        />
      </div>
      <div className="destination-box">
        <AssigneesComboBox
          disabled={!planets?.option2?.length || !vehicles?.option2?.length}
          destination={2}
          planets={planets?.option2}
          setPlanets={setPlanets}
          vehicles={vehicles?.option2}
          setVehicles={setVehicles}
          timeTaken={timeTaken}
          setTimeTaken={setTimeTaken}
          selectedPlanets={selectedPlanets}
          setSelectedPlanets={setSelectedPlanets}
          selectedVehicles={selectedVehicles}
          setSelectedVehicles={setSelectedVehicles}
        />
      </div>
      <div className="destination-box">
        <AssigneesComboBox
          disabled={!planets?.option3?.length || !vehicles?.option3?.length}
          destination={3}
          planets={planets?.option3}
          setPlanets={setPlanets}
          vehicles={vehicles?.option3}
          setVehicles={setVehicles}
          timeTaken={timeTaken}
          setTimeTaken={setTimeTaken}
          selectedPlanets={selectedPlanets}
          setSelectedPlanets={setSelectedPlanets}
          selectedVehicles={selectedVehicles}
          setSelectedVehicles={setSelectedVehicles}
        />
      </div>
      <div className="destination-box">
        <AssigneesComboBox
          disabled={!planets?.option4?.length || !vehicles?.option4?.length}
          destination={4}
          planets={planets?.option4}
          setPlanets={setPlanets}
          vehicles={vehicles?.option4}
          setVehicles={setVehicles}
          timeTaken={timeTaken}
          setTimeTaken={setTimeTaken}
          selectedPlanets={selectedPlanets}
          setSelectedPlanets={setSelectedPlanets}
          selectedVehicles={selectedVehicles}
          setSelectedVehicles={setSelectedVehicles}
        />
      </div>
      <div className="time-box">
        <h1>Time Taken : {timeTaken}</h1>
      </div>
    </>
  );
};

export default Destination;
