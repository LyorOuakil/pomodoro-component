import React from 'react';
import useTimer from '../hooks/useTimerHooks';
import { Time } from '../interfaces/Time.interface';

const Timer: React.FC<{ time: Time }> = ({ time }) => {
  const { setStart, hrsMinsSecs } = useTimer(time);
  return (
    <div>
      <div>{`${hrsMinsSecs.hrs}:${hrsMinsSecs.mn}:${hrsMinsSecs.s}`}</div>
      <button onClick={() => setStart(true)}>Start working</button>
      <button onClick={() => setStart(false)}>Pause</button>
    </div>
  );
};

export default Timer;
