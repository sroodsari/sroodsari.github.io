// Flower.js
import React from 'react';

const Flower = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="18" cy="12" rx="4" ry="2.5" fill="#d2bafc" />
      <ellipse cx="6" cy="12" rx="4" ry="2.5" fill="#d2bafc" />
      <ellipse cx="12" cy="18" rx="4" ry="2.5" fill="#d2bafc" transform="rotate(90 12 18)" />
      <ellipse cx="12" cy="6" rx="4" ry="2.5" fill="#d2bafc" transform="rotate(90 12 6)" />
      <ellipse cx="16.97" cy="16.97" rx="4" ry="2.5" fill="#b68ffa" transform="rotate(45 16.97 16.97)" />
      <ellipse cx="7.03" cy="16.97" rx="4" ry="2.5" fill="#b68ffa" transform="rotate(135 7.03 16.97)" />
      <ellipse cx="16.97" cy="7.03" rx="4" ry="2.5" fill="#b68ffa" transform="rotate(135 16.97 7.03)" />
      <ellipse cx="7.03" cy="7.03" rx="4" ry="2.5" fill="#b68ffa" transform="rotate(45 7.03 7.03)" />
      <circle cx="12" cy="12" r="4" fill="#fcf3ba" />
    </svg>
  );
};

export default Flower;
