/* eslint-disable */
import { useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

const Fireworks = () => {
  const state = {
    animationInstance: null,
    intervalId: setInterval(nextTickAnimation, 400),
  };

  useEffect(() => {
    return () => {
      console.log('Fireworks clean up', state);
      clearInterval(state.intervalId);
    };
  }, []);

  function getAnimationSettings(originXA, originXB) {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: randomInRange(originXA, originXB),
        y: Math.random() - 0.2,
      },
    };
  }

  function nextTickAnimation() {
    state.animationInstance(getAnimationSettings(0.1, 0.3));
    state.animationInstance(getAnimationSettings(0.7, 0.9));
  }

  function getInstance(instance) {
    state.animationInstance = instance;
  }

  return <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />;
};

export default Fireworks;
