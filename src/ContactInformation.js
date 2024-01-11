import React from 'react';

const ContactInformation = ({ data, onChange, onNext, onPrev }) => {
  const handleInputChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2>Step 2: Contact Information</h2>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default ContactInformation;
