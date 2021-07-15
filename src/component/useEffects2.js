import React, { useEffect, useState } from 'react';

const UseEffects2 = () => {
  const [width, setWidth] = useState(window.screen.width);

  const actualwidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', actualwidth);

    return () => {
      window.removeEventListener('resize', actualwidth);
    };
  });

  return (
    <div>
      <h1> {width} </h1>
    </div>
  );
};
export default UseEffects2;
