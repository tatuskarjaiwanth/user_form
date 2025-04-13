import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    number: '',
    email: '',
    sex: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('User saved successfully!');
      setFormData({ name: '', age: '', number: '', email: '', sex: '' });
    } else {
      alert('Error saving user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {['name', 'age', 'number', 'email', 'sex'].map(field => (
        <div key={field}>
          <label>{field[0].toUpperCase() + field.slice(1)}:</label>
          <input
            type={field === 'age' ? 'number' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
