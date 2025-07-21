import React, { useState } from 'react';

const faqItems = [
  {
    question: 'What is A.S.P.I.R.E AI Club?',
    answer: 'A.S.P.I.R.E is BVRITH\'s premier Artificial Intelligence and innovation club. We focus on fostering AI knowledge, practical skills, and creating a community of AI enthusiasts and innovators among students.',
  },
  {
    question: 'Is joining the club free?',
    answer: 'Yes! Joining A.S.P.I.R.E AI Club is completely free for all BVRITH students. We believe in making AI education and resources accessible to everyone.',
  },
  {
    question: 'Do I need prior AI/ML experience to join?',
    answer: 'Not at all! We welcome students from all backgrounds and experience levels. Whether you\'re a complete beginner or have some experience, we have resources and activities suitable for everyone.',
  },
  {
    question: 'What activities does the club organize?',
    answer: 'We organize hands-on workshops, hackathons, research projects, guest lectures, coding competitions, study groups, and networking events with industry professionals.',
  },
  {
    question: 'How can I join the club?',
    answer: 'Simply reach out to us through our social media channels or contact any club member. We have regular recruitment drives and welcome new members throughout the academic year.',
  },
  {
    question: 'What programming languages should I know?',
    answer: 'Python is the most commonly used language in our club activities, but we also work with R, JavaScript, and other languages. Don\'t worry if you\'re not familiar with these - we provide learning resources!',
  },
  {
    question: 'Are there any prerequisites?',
    answer: 'The only prerequisite is enthusiasm and willingness to learn! We welcome students from all departments and years. A basic understanding of mathematics and programming helps but isn\'t mandatory.',
  },
  {
    question: 'What career opportunities does AI offer?',
    answer: 'AI offers diverse career paths including Data Scientist, ML Engineer, AI Researcher, Product Manager, AI Consultant, and more. Our club helps you explore these opportunities through mentorship and industry connections.',
  },
];

function FAQItem({ item, idx, openIndex, setOpenIndex }) {
  const isOpen = openIndex === idx;

  return (
    <div className="mb-6 border-b border-white/10 pb-6">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={() => setOpenIndex(isOpen ? null : idx)}
      >
        <span className="text-white font-semibold text-lg pr-4">{item.question}</span>
        <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''} flex-shrink-0`}>
          +
        </div>
      </button>
      {isOpen && (
        <div className="mt-4">
          <p className="text-gray-300 leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const firstCol = faqItems.slice(0, Math.ceil(faqItems.length / 2));
  const secondCol = faqItems.slice(Math.ceil(faqItems.length / 2));

  return (
    <section className="bg-[#1A1A1A] px-6 md:px-20 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Got questions about joining our AI club? We've got answers!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {firstCol.map((item, idx) => (
              <FAQItem key={idx} item={item} idx={idx} openIndex={openIndex} setOpenIndex={setOpenIndex} />
            ))}
          </div>
          <div>
            {secondCol.map((item, idx) => (
              <FAQItem
                key={idx + firstCol.length}
                item={item}
                idx={idx + firstCol.length}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
