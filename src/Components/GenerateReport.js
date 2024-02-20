import React, { useState } from 'react';

const GenerateReport = () => {
  const [department, setDepartment] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleGenerate = () => {
    // Logic to generate report
    console.log('Generating report...');
  };

  return (
    <div className="report-container">
      <h2>Generate Report</h2>
        <h3>Department</h3>
      <div className="dropdown-container">
        <div className="dropdown">
          <label htmlFor="department">Department:</label>
          <select id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="">Select Department</option>
            <option value="department1">CSE</option>
            <option value="department1">ISE</option>
            <option value="department1">AIML</option>
            <option value="department1">ECE</option>
            <option value="department1">ME</option>
            <option value="department1">CVE</option>
            <option value="department1">EEE</option>
            <option value="department1">CSDS</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="facultyName">Faculty Name:</label>
          <select id="facultyName" value={facultyName} onChange={(e) => setFacultyName(e.target.value)}>
            <option value="">Select Faculty</option>
            <option value="department1">CSE</option>
            <option value="department1">ISE</option>
            <option value="department1">AIML</option>
            <option value="department1">ECE</option>
            <option value="department1">ME</option>
            <option value="department1">CVE</option>
            <option value="department1">EEE</option>
            <option value="department1">CSDS</option>
          </select>
        </div>
      </div>
        <h3>Select Time Range</h3>
      <div className="time-range-container">
        <div className="date-selector">
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className="date-selector">
          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
      </div>
      <div className="generate-btn-container">
        <button className="generate-button" onClick={handleGenerate}>Generate</button>
      </div>
    </div>
  );
};

export default GenerateReport;
