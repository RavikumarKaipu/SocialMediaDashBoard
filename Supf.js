import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access the form field values using the state variables (email, password, firstName, lastName)
  };

  return (
    <div className="container text-center">
      <div>
        <h1>User Registration - Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="m-3">
          <div className="form-group row">
            <label className="col-4 col-form-label">E-mail:</label>
            <div className="col-8">
              <input
                type="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-4 col-form-label">Password:</label>
            <div className="col-8">
              <input
                type="password"
                className="form-control"
                required
                minLength="6"
                maxLength="10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-4 col-form-label">First Name:</label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                required
                minLength="2"
                maxLength="20"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-4 col-form-label">Last Name:</label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                required
                minLength="2"
                maxLength="20"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
