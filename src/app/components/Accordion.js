import { useState } from "react";

const AccordionItem = ({ title, content, isExpanded, onClick }) => {
  return (
    <div className="mb-8 bg-[#FFB9A0] border-4 border-[#9C6EFF] w-full">
      <button
        type="button"
        className={`mb-2 flex w-full items-center justify-between gap-4  ${
          !isExpanded && ""
        } bg-transparent p-2 text-left text-[3vh]`}
        aria-expanded={isExpanded}
        onClick={onClick}
      >
        {title}
      </button>
      {isExpanded && (
        <div className={`mb-2 text-pretty ${isExpanded && ""} p-2 text-[2vh]`}>
          {content}
        </div>
      )}
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
