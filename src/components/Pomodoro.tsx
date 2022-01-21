import React from 'react';
import Timer from './Timer';

const Pomodoro: React.FC = () => {
  const time = {
    hours: 0,
    minutes: 25,
    seconds: 59
  };
  return (
    <div>
      <h1>Timer</h1>
      <Timer time={time} />
    </div>
  );
};

export default Pomodoro;
