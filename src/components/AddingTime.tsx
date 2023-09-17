import React, { useState } from "react";
import "./Common.css";

const AddingTime = () => {
  const [hovers, setHovers] = useState("");
  const [minutes, setMinutes] = useState("");
  const [totalHovers, setTotalHovers] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [resetFields, setResetFields] = useState(false);

  const handleAddingTime = () => {
    const hoversValue = parseInt(hovers, 10) || 0;
    const minutesValue = parseInt(minutes, 10) || 0;

    const total =
      totalHovers * 60 + totalMinutes + hoversValue * 60 + minutesValue;

    // Calculate total hover and total minutes from the total time
    const newTotalHover = Math.floor(total / 60);
    const newTotalMinutes = Math.floor(total % 60);

    // update the state with the new total time
    setTotalHovers(newTotalHover);
    setTotalMinutes(newTotalMinutes);

    // clear the input fields
    setHovers("");
    setMinutes("");
    setResetFields(false);
  };

  const handleReset = () => {
    setHovers("");
    setMinutes("");
    setTotalHovers(0);
    setTotalMinutes(0);
    setResetFields(true);
  };

  return (
    <div className="time-management">
      <h1 className="time-management__heading">Time Management</h1>
      <div className="time-management__wrapper">
        <div className="time-adding__management">
          <p className="time-adding__heading">Adding Time (Calculate)</p>
          <input
            type="number"
            value={hovers}
            onChange={(e) => setHovers(e.target.value)}
            placeholder="Enter hours (digits or integer format)"
            className="time-hover__field"
          />
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            placeholder="Enter minutes (digits or integer format)"
            className="time-minute__field"
          />

          <div className="time-button__wrapper">
            <button onClick={handleReset} className="reset-time__button">
              Reset
            </button>

            <button onClick={handleAddingTime} className="add-time__button">
              Add Time
            </button>
          </div>
          <div> Your total hours is : {totalHovers}</div>
          <div>Your total minutes is : {totalMinutes}</div>
        </div>

        <div className="time-sub__management">
          <p className="time-sub__heading">Substract Time (Calculate)</p>
          <input
            type="number"
            value={hovers}
            onChange={(e) => setHovers(e.target.value)}
            placeholder="Enter hours (digits or integer format)"
            className="time-hover__field"
          />
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            placeholder="Enter minutes (digits or integer format)"
            className="time-minute__field"
          />

          <div className="time-button__wrapper">
            <button onClick={handleReset} className="reset-time__button">
              Reset
            </button>

            <button onClick={handleAddingTime} className="add-time__button">
              Substract Time
            </button>
          </div>
          <div> Your total hours is : {totalHovers}</div>
          <div>Your total minutes is : {totalMinutes}</div>
        </div>
      </div>
    </div>
  );
};

export default AddingTime;
