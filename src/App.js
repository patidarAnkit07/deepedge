import React, { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import ContactInformation from './ContactInformation';
import AccountSetup from './ AccountSetup';
import Modal from './Modal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setModalOpen(true);
  };

  return (
    <div>
      {currentStep === 1 && (
        <PersonalInformation
          data={formData}
          onChange={handleInputChange}
          onNext={handleNext}
        />
      )}
      {currentStep === 2 && (
        <ContactInformation
          data={formData}
          onChange={handleInputChange}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentStep === 3 && (
        <AccountSetup
          data={formData}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          onPrev={handlePrev}
        />
      )}
       {isModalOpen && <Modal
       data={formData}
       setModalOpen = {setModalOpen}/>}
    </div>
  );
};

export default App;
