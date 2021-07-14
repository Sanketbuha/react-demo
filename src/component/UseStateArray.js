import React, { useState } from 'react';

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: 'sanket',
      age: 23
    },
    {
      id: 1,
      myName: 'patel',
      age: 22
    },
    {
      id: 2,
      myName: 'abc',
      age: 2
    }
  ];
  console.log(bioData);

  const [myArray, setMyArray] = useState(bioData);
  const clearArray = () => {
    setMyArray([]);
  };

  const remove = id => {
    // alert(id);\
    const newData = myArray.filter(val => {
      return val.id !== id;
    });
    setMyArray(newData);
  };

  return (
    <>
      {myArray.map(val => {
        return (
          <h1 key={val.id}>
            Name: {val.myName} & Age: {val.age}{' '}
            <button onClick={() => remove(val.id)}> Remove </button>
          </h1>
        );
      })}
      <button onClick={clearArray}>Clear</button>
    </>
  );
};

export default UseStateArray;
