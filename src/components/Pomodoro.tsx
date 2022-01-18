import React, { useEffect, useState } from 'react';

const getCurrentTime = (seconds: number) => {
  console.log('call');
  return {
    hours: Math.floor(seconds / (60 * 60)),
    minutes: Math.floor(seconds / 60),
    seconds: Math.ceil((seconds % (60 * 60)) % 60)
  };
};

const Pomodoro: React.FC = () => {
  const [time, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 1500
  });

  useEffect(() => {
    setTimeout(() => {
      setTimer(getCurrentTime(time.seconds - 1));
    }, 1000);
  });

  return (
    <div>
      <h1>Time: {time.seconds} </h1>
    </div>
  );
};

export default Pomodoro;
