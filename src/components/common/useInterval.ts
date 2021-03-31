import { useEffect, useState } from "react";

export const useInterval = (
  isActive: boolean = true,
  startTime: number = 0
) => {
  const [intervalLink, setIntervalLink] = useState<NodeJS.Timeout | null>(null);
  const [timeStopwatch, setTime] = useState<number>(startTime);
  const [activeInterval, setActiveInterval] = useState(isActive);

  useEffect(() => {
    if (activeInterval) {
      play();
    }
    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    if (intervalLink) {
      clearInterval(intervalLink);
      setIntervalLink(null);
      setActiveInterval(false);
    }
  };

  const play = () => {
    stop(); // we stop because we do not want to contaminate the operational memory
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setActiveInterval(true);
    setIntervalLink(interval);
  };

  return {
    timeStopwatch,
    setTime,
    activeInterval,
    play,
    stop,
  };
};
