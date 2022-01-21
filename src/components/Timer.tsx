import React, { useEffect, useState } from 'react';
import useTimer from '../hooks/useTimerHooks';
import { Time } from '../interfaces/Time.interface';

const Timer: React.FC<{ time: Time }> = ({ time }) => {
  const { tick, start, setStart, hrsMinsSecs } = useTimer(time);

  useEffect(() => {
    if (start) {
      const timerId = setInterval(() => tick(), 1000);
      return () => clearInterval(timerId);
    }
    return () => {};
  });

  return (
    <div>
      <div>{`${hrsMinsSecs.hrs}:${hrsMinsSecs.mn}:${hrsMinsSecs.s}`}</div>
      <button onClick={() => setStart(true)}>Start working</button>
    </div>
  );
};

export default Timer;