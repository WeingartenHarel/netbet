import React, { useState, useEffect } from 'react';

const Timer = ({drawTime}) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    minutes: 0
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // Set your target date here
      const targetDate = new Date(drawTime);

      const currentTime = new Date();
      const timeRemaining = targetDate - currentTime;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

      setCountdown({ days, minutes });
    };

    // Update the countdown every minute
    const timer = setInterval(calculateTimeRemaining, 1000);

    // Clear the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='timer'>
      <p>Days: {countdown.days}</p>
      <p>Minutes: {countdown.minutes}</p>
    </div>
  );
};

export default Timer;