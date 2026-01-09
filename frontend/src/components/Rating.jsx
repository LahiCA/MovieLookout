import React, { useState, useEffect } from "react";

const Rating = ({ movieId }) => {
  // Load saved rating from localStorage
  const savedRating = localStorage.getItem(`rating-${movieId}`);
  const [rating, setRating] = useState(savedRating ? Number(savedRating) : 0);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    localStorage.setItem(`rating-${movieId}`, value);
  };

  return (
    <div style={{ display: "flex", gap: "5px", cursor: "pointer", marginTop: "5px" }}>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{
            fontSize: "1.5rem",
            color: star <= (hover || rating) ? "#FFD700" : "#ccc",
          }}
        >
          ★
        </span>
      ))}
      <span style={{ marginLeft: "8px", fontSize: "1rem" }}>{rating}/5</span>
    </div>
  );
};

export default Rating;
