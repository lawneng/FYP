import React, { useState } from 'react';
import AniFaceLogo from './AniFace-logos_black.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { TextInput, Select } from '@mantine/core';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const logoStyle = {
    width: '350px', // Adjust the size of your logo
    marginBottom: '20px', // Spacing below the logo
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const inputStyle = {
    width: '300px',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '320px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    if (!email || !password || !birthdate || !gender) {
      setError('Please fill in all fields');
      setSuccessMessage(''); // Clear success message
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Handle successful registration, e.g., redirect to a user dashboard
        setError(''); // Clear error message
        setSuccessMessage('Account created successfully'); // Set success message
        window.location.href = '/UserHome';
      } catch (error) {
        setError(error.message);
        setSuccessMessage(''); // Clear success message
      }
    }
  }

  return (
    <div style={containerStyle}>
      <img src={AniFaceLogo} alt="Your Logo" style={logoStyle} />
      <form>
      <TextInput
          style={inputStyle}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          style={inputStyle}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          style={inputStyle}
          placeholder="Birthdate"
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />

        <Select
          style={inputStyle}
          placeholder="Select Gender"
          data={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
          ]}
          value={gender} // Set the selected value to the 'gender' state
          onChange={(selectedGender) => setGender(selectedGender)} // Update the 'gender' state when an option is selected
        />

        <button
          style={buttonStyle}
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </form>
      {error && <p>{error}</p>}
      {successMessage && <p>Success: {successMessage}</p>}
    </div>
  );
}

export default Signup;
