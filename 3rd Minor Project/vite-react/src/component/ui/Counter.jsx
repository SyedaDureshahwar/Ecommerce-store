
import React, { useEffect, useState } from 'react';

const Counter = ({ start = 0, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const interval = setInterval(() => {
      const now = Date.now();
      if (now >= endTime) {
        setCount(end);
        clearInterval(interval);
      } else {
        const progress = (now - startTime) / duration;
        setCount(Math.floor(start + progress * (end - start)));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [start, end, duration]);

  return (
    <div className="text-center text-white text-2xl font-bold">
      {count}
    </div>
  );
};

export default Counter;
