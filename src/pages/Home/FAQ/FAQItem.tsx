import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^\w]+/g, "-");

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = slugify(question);

  return (
    <article className="w-full max-w-2xl border-b border-gray-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left text-xl font-semibold flex justify-between items-center text-white bg-[#0d4754] p-3 cursor-pointer transition-all duration-300 ${
          isOpen ? "rounded-t-xl" : "rounded-xl"
        }`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
      >
        {question}
        <span
          className={`text-2xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          ▲
        </span>
      </button>

      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-black/80 bg-gray-100/50 border-2 border-t-0 border-black/10 rounded-b-xl p-4 whitespace-pre-line">
          {answer}
        </div>
      </div>
    </article>
  );
};

export default FAQItem;
