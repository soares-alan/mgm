import React, { useState } from "react";
import faqIcon from "../assets/faq.webp";
import type { FAQItem } from "../types/faq";

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section
      className="w-full py-16 px-4 bg-[#e3e8ee] relative overflow-hidden border-t-4 border-b-4 border-primary"
      aria-labelledby="faq-title"
      id="faq"
    >
      <div className="max-w-2xl mx-auto text-center mb-10">
        <div className="flex items-center justify-center mb-4">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary text-3xl mr-3 shadow-lg">
            <img src={faqIcon} alt="FAQ Icon" className="w-10 h-10 object-contain" />
          </span>
          <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-primary drop-shadow-sm">FAQs</h2>
        </div>
        <p className="text-base text-gray-700 max-w-full truncate mx-auto">Your questions about gutters, soffit, and fascia—answered simply.</p>
      </div>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className={`mb-4 rounded-xl shadow-md transition-all duration-300 bg-white/90 border border-primary/20 ${open === idx ? 'ring-2 ring-primary/40' : ''}`}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary/40 group"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
              aria-controls={`faq-panel-${idx}`}
            >
              <span className="text-lg font-semibold text-primary group-hover:text-[#005e8c] transition-colors duration-200">{faq.question}</span>
              <svg
                className={`w-6 h-6 ml-4 transform transition-transform duration-300 ${open === idx ? 'rotate-180 text-primary' : 'text-gray-400'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open === idx && (
              <div
                id={`faq-panel-${idx}`}
                className="px-6 pb-6 text-base text-gray-700 animate-fade-in"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
