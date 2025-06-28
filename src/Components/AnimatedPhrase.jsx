import React, { useEffect, useState } from 'react';

const AnimatedPhrase = ({ phrase }) => {
  const words = phrase.split(' ');
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    words.forEach((word, index) => {
      setTimeout(() => {
        setVisibleWords((prev) => [...prev, word]);
      }, index * 700); // control speed
    });
  }, [phrase]);

  return (
    // <div className="w-full h-screen ">
      <div className="sm:text-[60px] text-[35px] font-bold font flex flex-wrap gap-2 text- leading-[1]">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-1000 ease-in-out transform ${
              visibleWords.includes(word)
                ? 'opacity-100 blur-0 translate-y-0'
                : 'opacity-0 blur-sm -translate-y-6'
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    // </div>
  );
};

export default AnimatedPhrase;
