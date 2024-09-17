import { useState } from "react";

const AccordionItem = ({ title, content, isExpanded, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="mb-8 bg-[#FFB9A0] border-4 border-[#9C6EFF] w-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        type="button"
        className={`mb-2 flex w-full items-center justify-between gap-4 bg-transparent p-2 text-left text-[3vh] transition-all duration-300`}
        aria-expanded={isExpanded}
      >
        {title}
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-800 ease-in-out ${
          isExpanded ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="mb-2 p-2 text-pretty text-[2.5vh]">
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };

  return (
    <div className="overflow-hidden w-[95vw] md:w-[100%]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default Accordion;
