import React, { useState } from 'react';

const ContactInformation = ({ data, onChange, onNext, onPrev }) => {
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data.email);
  };

  const validatePhoneNumber = () => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(data.phoneNumber);
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(data.password);
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!validateEmail()) {
      newErrors.email = 'Invalid email address';
    }

    if (!validatePhoneNumber()) {
      newErrors.phoneNumber = 'Invalid phone number';
    }

    if (!validatePassword()) {
      newErrors.password = 'A valid password must be at least 8 characters minimum, including at least one lowercase, one uppercase, one digit, and one special character';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext();
    }
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
        {errors.email && <div className="error">{errors.email}</div>}
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
        {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
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
        {errors.password && <div className="error">{errors.password}</div>}
      </label>
      <br />
      <button onClick={onPrev}>Previous</button>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default ContactInformation;
