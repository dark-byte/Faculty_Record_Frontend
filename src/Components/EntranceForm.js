import '../App.css';
import React, { useState } from 'react';
// import pic from '../Assets/test.jpg'

function EntranceForm() {
  const [facultyId, setFacultyId] = useState('');
  // const [image, setImage] = useState(null);
  const [facultyInfo, setFacultyInfo] = useState(null); // State to store faculty information

  const handleInButtonClick = () => {
    // Logic for displaying image when IN button is clicked
    // setImage(pic);
    // Update faculty information
    setFacultyInfo({
      name: 'John Doe',
      facultyId: facultyId,
      inTime: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    });

    // Reset form input and image after 5 seconds
    setTimeout(() => {
      setFacultyId('');
      // setImage(null);
      setFacultyInfo(null); // Reset faculty information
    }, 5000);
  };

  const handleOutButtonClick = () => {
    // Logic for displaying image when OUT button is clicked
    // setImage(pic);
    // Update faculty information
    setFacultyInfo({
      ...facultyInfo, // Preserve existing information
      outTime: new Date().toLocaleTimeString()
    });

    // Reset form input and image after 5 seconds
    setTimeout(() => {
      setFacultyId('');
      // setImage(null);
      setFacultyInfo(null); // Reset faculty information
    }, 5000);
  };

  return (
    <div className="App">
      <h1>PESITM Faculty Entrance Record</h1>
      <div className="container">
        <div className="form-container">
          <div className="faculty-id">
            <label htmlFor="facultyId">Faculty ID</label>
            <input
              type="text"
              id="facultyId"
              value={facultyId}
              onChange={(e) => setFacultyId(e.target.value)}
            />
          </div>
          <div className="buttons-container">
            <button className="in-button" onClick={handleInButtonClick}>In</button>
            <button className="out-button" onClick={handleOutButtonClick}>Out</button>
          </div>
        </div>
        {/* <div className="image-container">
          {image && <img src={image} alt="Entrance Image" />}
        </div> */}
      </div>
        {facultyInfo && ( // Render faculty information if available
        <div className="faculty-info">
          <h2>Faculty Information</h2>
          <table className='f-info'>
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{facultyInfo.name}</td>
              </tr>
              <tr>
                <th>Faculty ID:</th>
                <td>{facultyInfo.facultyId}</td>
              </tr>
              <tr>
                <th>In Time:</th>
                <td>{facultyInfo.inTime}</td>
              </tr>
              {facultyInfo.outTime && (
                <tr>
                  <th>Out Time:</th>
                  <td>{facultyInfo.outTime}</td>
                </tr>
              )}
              <tr>
                <th>Date:</th>
                <td>{facultyInfo.date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default EntranceForm;
