import React, { useState } from "react";
import "./Common.css";

const SubtractTime = () => {
  const [inputHours1, setInputHours1] = useState("");
  const [inputMinutes1, setInputMinutes1] = useState("");
  const [inputHours2, setInputHours2] = useState("");
  const [inputMinutes2, setInputMinutes2] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [totalMinutes, setTotalMinutes] = useState("");

  const handleHours1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputHours1(e.target.value);
  };

  const handleMinutes1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMinutes1(e.target.value);
  };

  const handleHours2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputHours2(e.target.value);
  };

  const handleMinutes2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMinutes2(e.target.value);
  };

  const subtractTime = () => {
    const hours1 = parseInt(inputHours1) || 0;
    const minutes1 = parseInt(inputMinutes1) || 0;
    const hours2 = parseInt(inputHours2) || 0;
    const minutes2 = parseInt(inputMinutes2) || 0;

    let totalHrs = hours1 - hours2;
    let totalMins = minutes1 - minutes2;

    if (totalMins < 0) {
      totalHrs--;
      totalMins += 60;
    }

    if (totalHrs < 0) {
      totalHrs = 0; // Ensure total hours is not negative
    }

    setTotalHours(totalHrs.toString());
    setTotalMinutes(totalMins.toString());
  };

  const resetTime = () => {
    setInputHours1("");
    setInputMinutes1("");
    setInputHours2("");
    setInputMinutes2("");
    setTotalHours("");
    setTotalMinutes("");
  };

  return (
    <div className="time-sub__management">
      <p className="time-sub__heading">Subtract Time (Calculate)</p>
      <div className="time-sub__wrapper">
        <input
          type="number"
          placeholder="Enter hour"
          className="time-hover__field"
          value={inputHours1}
          onChange={handleHours1Change}
        />
        <input
          type="number"
          placeholder="Enter minutes"
          className="time-minute__field"
          value={inputMinutes1}
          onChange={handleMinutes1Change}
        />
      </div>
      <div className="time-sub__icon">
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="#8e8e8e"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>

      <div className="time-sub__wrapper">
        <input
          type="number"
          placeholder="Enter hour"
          className="time-hover__field"
          value={inputHours2}
          onChange={handleHours2Change}
        />
        <input
          type="number"
          placeholder="Enter minutes"
          className="time-minute__field"
          value={inputMinutes2}
          onChange={handleMinutes2Change}
        />
      </div>

      <div className="time-button__wrapper">
        <button className="reset-time__button" onClick={resetTime}>
          Reset
        </button>

        <button
          className="add-time__button"
          onClick={() => {
            subtractTime();
          }}
        >
          Subtract Time
        </button>
      </div>
      <p className="time-total__hover">Your total hover is: {totalHours}</p>
      <p className="time-total-minute">Your total minute is: {totalMinutes}</p>
    </div>
  );
};

export default SubtractTime;
