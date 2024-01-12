import React from 'react';

const AccountSetup = ({ data, onChange, onSubmit, onPrev }) => {
  const handleInputChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Step 3: Account Setup</h2>
      <label className="block mb-2">
        Username:
        <input
          className="w-full border rounded py-2 px-3"
          type="text"
          name="username"
          value={data.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className="block mb-2">
        Password:
        <input
          className="w-full border rounded py-2 px-3"
          type="password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className="block mb-2">
        Confirm Password:
        <input
          className="w-full border rounded py-2 px-3"
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button
        className="bg-blue-500 text-white rounded py-2 px-4 mr-2"
        onClick={onPrev}
      >
        Previous
      </button>
      <button
        className="bg-blue-500 text-white rounded py-2 px-4"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default AccountSetup;
