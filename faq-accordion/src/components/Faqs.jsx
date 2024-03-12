import { useState } from 'react';
import Faq from './Faq';
import star from '../assets/images/icon-star.svg';

const faqs = [
  {
    id: 1,
    question: 'What is Frontend Mentor, and how will it help me?',
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    question: 'Is Frontend Mentor free?',
    answer:
      'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
  },
  {
    id: 3,
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    answer:
      " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      " The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const Faqs = () => {
  const [currentOpen, setIsCurrentOpen] = useState(null);

  return (
    <div className='faqs'>
      <div className='header'>
        <img
          src={star}
          alt='star icon'
          width={30}
        />
        <p className='title'>FAQs</p>
      </div>

      <div className='questions'>
        {faqs.map((faq, index) => (
          <Faq
            faq={faq}
            index={index}
            currentOpen={currentOpen}
            onOpen={setIsCurrentOpen}
            key={faq.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
