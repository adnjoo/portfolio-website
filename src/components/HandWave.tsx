'use client';

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function HandWave() {
  const [isBooped, setBoop] = useState(false);
  const { rotation, timing } = useSpring({
    rotation: isBooped ? 30 : 0,
    timing: { duration: 500 },
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setBoop(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setBoop(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <animated.button
      onMouseEnter={() => setBoop(true)}
      onMouseLeave={() => setBoop(false)}
      style={{
        color: '#FFF',
        backfaceVisibility: 'hidden',
        transform: rotation.interpolate((r) => `rotate(${r}deg)`),
        transition: `transform 100ms`,
      }}
    >
      👋
    </animated.button>
  );
}

export default HandWave;
