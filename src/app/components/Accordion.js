import { useState } from "react";
import { motion } from "framer-motion";

const AccordionItem = ({ title, content, isExpanded, onClick }) => {
  return (
    <div className="mb-8 bg-[#FFB9A0] border-4 border-[#9C6EFF] w-full">
      <button
        type="button"
        className={`mb-2 flex w-full items-center justify-between gap-4 bg-transparent p-2 text-left text-[3vh]`}
        aria-expanded={isExpanded}
        onClick={onClick}
      >
        {title}
      </button>
      {/* Animate opening and closing with Framer Motion */}
      <motion.div
        initial={false} // Prevent re-initialization every render
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        exit={{ height: 0, opacity: 0 }} // Add exit animation
        transition={{ height: { duration: 0.3 }, opacity: { duration: 0.2 } }} // Customize durations
        className="overflow-hidden"
      >
        <div className="mb-2 text-pretty p-2 text-[2.5vh]">{content}</div>
      </motion.div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle or close other items
  };

  return (
    <div className="overflow-hidden w-[95vw] md:w-[100%]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
