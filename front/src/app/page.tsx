"use client"

import { useState, useEffect } from 'react';
import './styles/globals.css';

export default function Page() {
  const words = ['Developer', 'Solver', 'Coder']; // 바뀌는 단어들
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1000);

    return () => clearInterval(wordChangeInterval);
  }, []);

  return (
      <div className="flex flex-col justify-center items-start gap-10 w-full h-full">
        <div className="sm:text-4xl md:text-4xl lg:text-7xl font-bold">
          SEO HYUNWOO
        </div>
        <div className="w-1/5 border-t-4 border-white" />
        <div className='sm: text-2xl md:text-3xl lg:text-3xl'>
          <span className='mr-4'>Creative</span>
          <span className='font-bold'>{words[currentWordIndex]}</span>
        </div>
        <button className="w-1/5 border border-white bg-white text-black px-4 py-2">Go Project</button>
      </div>
  );
}
