import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [hobby, setHobby] = useState(false);
  const [country, setCountry] = useState('');

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      gender: gender,
      hobby: hobby ? 'Yes' : 'No',
      country: country
    };

    setSubmittedData(formData);
  };

  return (
    <div
      style={{
        padding: '30px',
        fontFamily: 'Arial'
      }}
    >
      <h2>React Form Example</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div style={{ margin: '10px 0' }}>
          <label>Name: </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div style={{ margin: '10px 0' }}>
          <label>Email: </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Gender */}
        <div style={{ margin: '10px 0' }}>
          <label>Gender: </label>

          <label>
            <input
              type="radio"
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              value="Female"
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>

        {/* Hobby */}
        <div style={{ margin: '10px 0' }}>
          <label>
            <input
              type="checkbox"
              checked={hobby}
              onChange={(e) => setHobby(e.target.checked)}
            />
            I like coding
          </label>
        </div>

        {/* Country */}
        <div style={{ margin: '10px 0' }}>
          <label>Country: </label>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            marginTop: '15px',
            padding: '6px 12px'
          }}
        >
          Submit
        </button>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Data:</h3>

          <pre>
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;