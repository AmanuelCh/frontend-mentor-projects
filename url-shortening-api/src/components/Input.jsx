import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Input = ({ link, links, setLink, onShortenURL }) => {
  // disallow shortening if the same link exists twice
  const [isDuplicate, setIsDuplicate] = useState(false);

  const inputRef = useRef(null);

  const notifyError = (message) =>
    toast.error(message, {
      autoClose: 3000,
    });

  const handleInput = () => {
    if (!link) {
      // handle no user input
      notifyError('Invalid Input!');
      return;
    }

    links.map((lnk) => {
      if (lnk.originalLink === link) {
        setIsDuplicate(true);
        setLink('');
      }
    });

    // don't call the api if duplicate links exist
    if (isDuplicate) {
      notifyError('No more than 2 duplicates!');
      setIsDuplicate(false);
      return;
    } else {
      onShortenURL();
    }

    inputRef.current.focus();
  };

  return (
    <div className='input-bg max-w-[90%] container mx-auto bg-darkViolet rounded-md'>
      <div className='p-6 flex flex-col justify-between gap-6 lg:p-12 lg:flex-row'>
        <input
          type='text'
          className='bg-white py-3 pl-6 rounded-md w-full outline-none'
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder='Shorten a link here'
          ref={inputRef}
        />
        <button
          className='btn px-8 rounded-md font-semibold hover:bg-cyan-300'
          onClick={handleInput}
        >
          Shorten
        </button>
      </div>
    </div>
  );
};

export default Input;
