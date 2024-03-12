import plus from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg';

const Faq = ({ faq, index, currentOpen, onOpen }) => {
  const open = index === currentOpen;

  const handleOpen = () => {
    onOpen((currentOpen) => (currentOpen = index));

    if (open) onOpen(null);
  };

  return (
    <div
      className='faq'
      onClick={handleOpen}
    >
      <div>
        <p className='question'>{faq.question}</p>
        <button className='btn'>
          <img
            src={open ? minus : plus}
            alt='plus sign'
          />
        </button>
      </div>
      {open && <p className='answer'>{faq.answer}</p>}
    </div>
  );
};

export default Faq;
