import React, { useState, useEffect } from 'react';

const TypingTitleAnimation: React.FC<{ title: string }> = ({ title }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const typingAnimation = () => {
      interval = setInterval(() => {
        if (currentIndex <= title.length) {
          setDisplayText(title.slice(0, currentIndex));
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(interval as NodeJS.Timeout);
          setCurrentIndex(0);
        }
      }, 150); // Adjust typing speed here
    };

    typingAnimation();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [title, currentIndex]);

  return (
    <div className="typing-title-container">
      <span className="typing-title">
        {displayText}
        <span className="blink-caret">|</span>
      </span>
    </div>
  );
};

export default TypingTitleAnimation;
