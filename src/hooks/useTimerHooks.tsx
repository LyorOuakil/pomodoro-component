import { useState } from 'react';
import { Time } from '../interfaces/Time.interface';

const useTimer = (time: Time) => {
  const { hours = 0, minutes = 0, seconds = 0 } = time;
  const [hrsMinsSecs, setTime] = useState({ hrs: hours, mn: minutes, s: seconds });
  const [start, setStart] = useState(false);

  const reset = () => setTime({ hrs: hours, mn: minutes, s: seconds });
  const isTotalCountDownFinished = () =>
    !!(hrsMinsSecs.hrs === 0 && hrsMinsSecs.mn === 0 && hrsMinsSecs.s === 0);
  const isMinuteCountdownFinished = () => !!(hrsMinsSecs.mn === 0 && hrsMinsSecs.s === 0);
  const isSecondsCountdownFinished = () => !!(hrsMinsSecs.s === 0);

  const tick = () => {
    if (isTotalCountDownFinished()) {
      return reset();
    }
    if (isMinuteCountdownFinished()) {
      return setTime({ hrs: hrsMinsSecs.hrs - 1, mn: 59, s: 59 });
    }
    if (isSecondsCountdownFinished()) {
      return setTime({ hrs: hrsMinsSecs.hrs, mn: hrsMinsSecs.mn - 1, s: 59 });
    }
    return setTime({
      hrs: hrsMinsSecs.hrs,
      mn: hrsMinsSecs.mn,
      s: hrsMinsSecs.s - 1
    });
  };

  return {
    tick,
    setStart,
    start,
    hrsMinsSecs
  };
};

export default useTimer;
