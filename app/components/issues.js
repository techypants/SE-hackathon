"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import "./issues.css"; // Import external CSS file

export default function IssueComp({ machineId, machineName, issue}) {
  const [timer, setTimer] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isClick, setIsClick] = useState(false);
  useEffect(() => {
    let interval;
    if (startTime && !endTime) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 600); // 1 minute
    }
    return () => clearInterval(interval);
  }, [startTime, endTime]);

  const startTimer = () => {
    const confirmStart = window.confirm("Are you sure you want to start the timer?");
    if (confirmStart) {
      setStartTime(new Date());
    }
  };

  const completeIssue = () => {
    const confirmComplete = window.confirm("Are you sure you want to complete the issue?");
    if (confirmComplete) {
      setEndTime(new Date());
      setIsCompleted(true);
    }
  };

  const calculateTimeTaken = () => {
    if (startTime && endTime) {
      const timeDiff = endTime.getTime() - startTime.getTime();
      const minutes = Math.floor(timeDiff / 600); // converting milliseconds to minutes
      return minutes;
    }
    return 0;
  };

  return (
    <div className="issue-card">
      <div className="issue-details">
        <p className="font-bold">Machine ID: {machineId}</p>
        <p className="font-bold">Machine Name: {machineName}</p>
        <p className="font-bold">Issue: {issue}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        {(!isCompleted &&!isClick) &&  (
          <button
            className="button button-blue"
			onClick={() => {
				startTimer();
				setIsClick(true);
			  }}
          >
            Start Timer
          </button>
        )}
        {(!isCompleted && isClick) &&  (
          <button
            className="button button-green"
            onClick={completeIssue}
          >
            Complete
          </button>
        )}
        {isCompleted && <p>Time taken: {calculateTimeTaken()} secondss</p>}
      </div>
      {startTime && !endTime && (
        <p>Elapsed Time: {timer} seconds</p>
      )}
    </div>
  );
}
