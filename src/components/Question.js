import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeRemaining > 1) {
        setTimeRemaining((prevTime) => prevTime - 1);
      } else {
        setTimeRemaining(0);
        onAnswered(false);
      }
    }, 1000);

    // Cleanup function to clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.text}</h2>
      <p>{timeRemaining > 0 ? `${timeRemaining} seconds remaining` : "Time's up!"}</p>
    </div>
  );
}

export default Question;
