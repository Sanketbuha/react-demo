import React, { useState } from 'react';

const BasicForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [allvalue, setAllValue] = useState([]);

  const submitFromNew = () => {
    if (email && password) {
      const newValue = {
        email: email,
        password: password
      };
      setAllValue([...allvalue, newValue]);
      setEmail('');
      setPassword('');
    } else {
      alert('Plz. Fill the Data');
    }
  };

  return (
    <>
      <div>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          // id="email"
          autoComplete="off"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          // id="password"
          autoComplete="off"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button type="submit" onClick={submitFromNew}>
        Login{' '}
      </button>

      <div>
        {allvalue.map(val => {
          return (
            <h3 key={Math.random()}>
              {val.email} & {val.password}{' '}
            </h3>
          );
        })}
      </div>
    </>
  );
};
export default BasicForm;
