import { useState, useEffect } from 'react';

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculate(targetDate: Date): CountdownValues {
  const diff = targetDate.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const ZERO: CountdownValues = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export function useCountdown(targetDate: Date): CountdownValues {
  const [timeLeft, setTimeLeft] = useState<CountdownValues>(ZERO);

  useEffect(() => {
    setTimeLeft(calculate(targetDate));
    const id = setInterval(() => setTimeLeft(calculate(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}
