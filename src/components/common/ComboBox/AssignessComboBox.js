import { ComboBox } from "@progress/kendo-react-dropdowns";
import { useState } from "react";

export const AssigneesComboBox = ({
  destination,
  planets,
  setPlanets,
  disabled,
  vehicles,
  setVehicles,
  timeTaken,
  setTimeTaken,
  selectedPlanets,
  setSelectedPlanets,
  selectedVehicles,
  setSelectedVehicles,
}) => {
  const [selected, setSelected] = useState();
  const calculateTime = () => {
    let speed = localStorage.getItem("speed");
    setTimeTaken(timeTaken + selected?.distance / Number(speed));
  };

  const onChange = (event, key) => {
    setSelectedPlanets([...selectedPlanets, event.value?.name]);

    setSelected(event.value);
    let latestPlanets = planets?.filter((curr) => {
      return curr?.name?.toLowerCase() !== event.value?.name?.toLowerCase();
    });
    setPlanets({
      [key]: latestPlanets,
    });
  };

  const onVehicleChange = (event, key) => {
    setSelectedVehicles([...selectedVehicles, event.target?.value]);
    vehicles?.forEach((curr) => {
      if (curr?.name?.toLowerCase() === event.target?.value?.toLowerCase()) {
        curr["total_no"] = curr?.total_no - 1;
      }
    });

    setVehicles({
      [key]: vehicles,
    });
    calculateTime();
  };
  return (
    <form className="k-form k-my-8">
      <label className="label">Destination {destination}</label>
      <ComboBox
        disabled={disabled}
        data={planets}
        value={selected}
        onChange={(e) => onChange(e, `option${destination + 1}`)}
        textField="name"
        groupField="occupation"
        suggest
      />
      <div
        className="vehicle-list"
        onChange={(e) => onVehicleChange(e, `option${destination + 1}`)}
      >
        {vehicles
          ? vehicles?.map((curr) => {
              if (selected?.distance <= curr?.max_distance) {
                return (
                  <span key={`${curr?.max_distance}${curr?.name}`}>
                    <input
                      onClick={() => localStorage.setItem("speed", curr?.speed)}
                      type="radio"
                      id={curr?.name}
                      value={curr?.name}
                      name={curr?.name}
                      disabled={curr?.total_no <= 0}
                    />
                    {curr?.name} ({curr?.total_no ? curr?.total_no : "0"})
                  </span>
                );
              }
            })
          : null}
      </div>
    </form>
  );
};
