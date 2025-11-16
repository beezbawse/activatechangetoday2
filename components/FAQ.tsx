
import React, { useState } from 'react';
import type { FC, ReactNode } from 'react';

interface FAQItemProps {
  question: string;
  children: ReactNode;
}

const faqs = [
  {
    question: 'What is Rapid Transformational Change?',
    answer: 'It is a hybrid therapy and coaching method that combines principles of Hypnotherapy, NLP, and Life Coaching. It is designed to get to the root cause of your issue quickly and effectively, allowing you to let go of old, unhelpful beliefs and install new, empowering ones in a short amount of time.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Many clients experience significant shifts and breakthroughs within the first few sessions. The goal is "rapid" transformation, so we focus on creating powerful changes from the very beginning. Lasting change depends on your commitment to the process.'
  },
  {
    question: 'Is our coaching confidential?',
    answer: 'Absolutely. Everything we discuss is held in the strictest confidence. Creating a safe and private space for you to be open and vulnerable is my top priority. I adhere to a strict code of ethics to ensure your privacy is protected.'
  },
  {
    question: 'What can I expect in the free 30-minute session?',
    answer: 'The free session is a relaxed, no-pressure conversation. It\'s an opportunity for us to get to know each other. You can share what challenges you\'re facing, and I can explain how I can help. The main goal is to see if we\'re a good fit to work together.'
  }
];


const FAQItem: FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-medium text-slate-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <div className="text-slate-600 pr-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Have questions? We have answers. Find more information here.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question}>
              <p>{faq.answer}</p>
            </FAQItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
