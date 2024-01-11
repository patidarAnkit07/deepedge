import React from 'react';

const AccountSetup = ({ data, onChange, onSubmit, onPrev }) => {
  const handleInputChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2>Step 3: Account Setup</h2>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={onPrev}>Previous</button>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default AccountSetup;
