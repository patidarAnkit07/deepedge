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
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Step 2: Contact Information</h2>
      <label className="block mb-2">
        Email:
        <input
          className="w-full border rounded py-2 px-3"
          type="email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="text-red-500">{errors.email}</div>}
      </label>
      <br />
      <label className="block mb-2">
        Phone Number:
        <input
          className="w-full border rounded py-2 px-3"
          type="tel"
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={handleInputChange}
        />
        {errors.phoneNumber && <div className="text-red-500">{errors.phoneNumber}</div>}
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
        {errors.password && <div className="text-red-500">{errors.password}</div>}
      </label>
      <br />
      <button className="bg-blue-500 text-white rounded py-2 px-4 mr-2" onClick={onPrev}>
        Previous
      </button>
      <button className="bg-blue-500 text-white rounded py-2 px-4" onClick={handleSubmit}>
        Next
      </button>
    </div>
  );
};

export default ContactInformation;
