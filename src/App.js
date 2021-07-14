import React, { useState } from 'react';
import './style.css';
import RulesHook from './component/rulesHook';
import UseStateArray from './component/UseStateArray';
import BasicForm from './component/basicForm';
import UseEffects1 from './component/useEffects1';

const App = () => {
  // const [myName, setMyName] = useState('Hello ');

  // const changeName = () => {
  //   let val = myName;
  //   val === 'Hello' ? setMyName('Welcome') : setMyName('Hello');
  // };

  // console.log(myName);
  return (
    <div>
      {/* <h1> {myName} </h1>
      <button onClick={changeName}> click </button> */}
      {/* <RulesHook /> */}
      {/* <UseStateArray /> */}
      {/* <BasicForm /> */}
      <UseEffects1 />
    </div>
  );
};
export default App;
