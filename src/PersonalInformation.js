import React from 'react';

const PersonalInformation = ({ data, onChange, onNext }) => {
  const handleInputChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={data.dateOfBirth}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default PersonalInformation;
