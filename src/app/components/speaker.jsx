import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "20+ YOE",
  "DevOps Evangelist",
  "Author",
  "Speaker",
  "Youtuber",
  "Spiritual Alchemist",
  "Mentor",
  "DevOps Ambassador",
];

const CursorWord = ({ word, position }) => {
  const [randomOffset] = useState(() => Math.random() * 150 - 75);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1.2, 1],
        y: [0, -30, -window.innerHeight + 50],
        x: [
          randomOffset,
          randomOffset * 0.75,
          randomOffset * -0.5,
          randomOffset * 0.25,
        ],
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 3,
        times: [0, 0.1, 0.9, 1],
        ease: "easeOut",
      }}
      className="absolute flex items-center justify-center font-thin text-[1rem] pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%)`,
        backgroundColor: "#ffeb3b",
        padding: "6px 10px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        color: "#2196F3",
      }}
    >
      {word}
    </motion.div>
  );
};

export default function Speaker() {
  const [cursorWords, setCursorWords] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let interval;
    if (isAnimating) {
      interval = setInterval(() => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setCursorWords((prev) => [
          ...prev,
          { id: Date.now(), word: randomWord },
        ]);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAnimating]);

  useEffect(() => {
    if (cursorWords.length > 0) {
      const timeout = setTimeout(() => {
        setCursorWords((prev) => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [cursorWords]);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsAnimating(true); // Start animation immediately
    // Trigger an immediate word display
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCursorWords([{ id: Date.now(), word: randomWord }]);
  };

  return (
    <section
      className="sm:h-screen h-[70vh] flex flex-col p-4 md:p-8 bg-gradient-to-br from-[#fb624c] to-[#ff8a70] overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter} // Update mouse enter handler
      onMouseLeave={() => setIsAnimating(false)}
    >
      <AnimatePresence>
        {cursorWords.map(({ id, word }) => (
          <CursorWord key={id} word={word} position={cursorPosition} />
        ))}
      </AnimatePresence>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl sm:text-5xl md:text-6xl lg:text-8xl font-pixeboy text-black text-center mb-4"
      >
        SPEAKER
      </motion.h1>
      <div className="flex-grow flex flex-col justify-center items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src="/savinder.jpg"
            alt="speaker"
            layout="fill"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 384px, 448px"
            className="object-cover"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-black text-center"
        >
          Mr. Savinder Puri
        </motion.p>
      </div>
    </section>
  );
}
