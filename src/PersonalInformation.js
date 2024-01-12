import React from 'react';

const PersonalInformation = ({ data, onChange, onNext }) => {
  const handleInputChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Step 1: Personal Information</h2>
      <label className="block mb-2">
        First Name:
        <input
          className="w-full border rounded py-2 px-3"
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className="block mb-2">
        Last Name:
        <input
          className="w-full border rounded py-2 px-3"
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className="block mb-2">
        Date of Birth:
        <input
          className="w-full border rounded py-2 px-3"
          type="date"
          name="dateOfBirth"
          value={data.dateOfBirth}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button
        className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default PersonalInformation;
