import React, { useState } from "react";
import "./de.css"; // Importing CSS file for styling

function Maintform() {
  const [formData, setFormData] = useState({
    machineryid: "",
    failureDate: "",
    maintenanceTeamSize: "",
    timeRequired: "",
    downTime: "",
    airtemp: "",
    processtemp: "",
    rpm: "",
    torquenm: "",
    toolwearmin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "machineryid",
      "failureDate",
      "maintenanceTeamSize",
      "timeRequired",
      "downTime",
      "airtemp",
      "processtemp",
      "rpm",
      "torquenm",
      "toolwearmin",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      const missingFieldNames = missingFields.map((field) =>
        field.replace(/([A-Z])/g, " $1").toLowerCase()
      ); // Convert camelCase to spaced text
      const alertMessage = `Input all required fields:\n${missingFieldNames
        .map((name) => -`${name}`)
        .join("\n")}`;
      alert(alertMessage);
    } else {
      const queryString = new URLSearchParams(formData).toString();
      window.location.search = queryString;
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Attributes of Machinery</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Machinery Id:</label>
            <input
              type="text"
              name="machineryid"
              value={formData.machineryid}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Failure Date:</label>
            <input
              type="date"
              name="failureDate"
              value={formData.failureDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Machinery Worker:</label>
            <input
              type="text"
              name="maintenanceTeamSize"
              value={formData.maintenanceTeamSize}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Time Required:</label>
            <input
              type="number"
              name="timeRequired"
              value={formData.timeRequired}
              onChange={handleChange}
              placeholder="In Hours"
            />
          </div>

          <div className="form-group">
            <label>Air Temperature:</label>
            <input
              type="number"
              name="airtemp"
              value={formData.airtemp}
              onChange={handleChange}
              placeholder="In Kelvin"
            />
          </div>
          <div className="form-group">
            <label>Process Temperature:</label>
            <input
              type="number"
              name="processtemp"
              value={formData.processtemp}
              onChange={handleChange}
              placeholder="In Kelvin"
            />
          </div>
          <div className="form-group">
            <label>Rotational Speed in RPM:</label>
            <input
              type="number"
              name="rpm"
              value={formData.rpm}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Torque N/m:</label>
            <input
              type="number"
              name="torquenm"
              value={formData.torquenm}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Tool Wear Min:</label>
            <input
              type="number"
              name="toolwearmin"
              value={formData.toolwearmin}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Maintform;
