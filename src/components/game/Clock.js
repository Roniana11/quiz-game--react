import React from 'react';
import { useState, useEffect } from 'react';

function Clock(props) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = props.endTime - Date.now();
      const seconds = Math.floor(timeLeft / 1000);
       if (timeLeft <= 0) {
        clearInterval(interval);
        setSeconds(0);
      } else {
        setSeconds(seconds);
      }
    }, 1000);
    return ()=>{clearInterval(interval)}
  }, [props]);

  return <div className="clock">{seconds}</div>;
}

export default Clock;
