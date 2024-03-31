const Link = ({ link, setLinks }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(link.shortenedLink);

    link.isCopied = !link.isCopied;
    setLinks((links) => [...links]);

    setTimeout(() => {
      link.isCopied = false;
      setLinks((links) => [...links]);
    }, 5000);
  };

  return (
    <div>
      <div className='flex justify-between items-start lg:items-center bg-white mt-4 py-3 px-4 rounded-md flex-col lg:flex-row'>
        <a
          className='text-veryDarkBlue w-[90%]  border-b border-gray-300 pb-2 lg:w-[60%] lg:border-b-0 lg:pb-0'
          href={link.originalLink}
          target='_blank'
        >
          {link.originalLink}
        </a>

        <div className='flex items-start gap-4 flex-col w-full pt-2 lg:w-auto lg:flex-row lg:pt-0 lg:items-center'>
          <a
            className='text-cyanDefault'
            href={link.originalLink}
            target='_blank'
          >
            {link.shortenedLink}
          </a>

          <button
            className={`w-full px-6 lg:w-[7rem] border-none text-white rounded-md py-2 lg:py-3 hover:opacity-50 ${
              link.isCopied ? 'bg-darkViolet' : 'bg-cyanDefault'
            }`}
            onClick={handleCopy}
          >
            {link.isCopied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Link;
