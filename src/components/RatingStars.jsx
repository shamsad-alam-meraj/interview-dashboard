import React from "react";

function Star({ filled }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.784.57-1.838-.197-1.539-1.118l1.285-3.958a1 1 0 00-.364-1.118L2.07 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69L9.05 2.927z" />
    </svg>
  );
}

export default function RatingStars({ value }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} filled={i <= Math.round(value)} />);
  }
  return (
    <div className="flex items-center gap-1">
      {stars} <span className="text-xs text-gray-500 ml-2">{value}</span>
    </div>
  );
}
