const Link = ({ link, setLinks }) => {
  // handle copying items
  const handleCopy = () => {
    // write the text to the clipboard
    navigator.clipboard.writeText(link.shortenedLink);

    // show copy status
    link.isCopied = !link.isCopied;
    setLinks((links) => [...links]);

    // change back copy status to default after 5 sec
    setTimeout(() => {
      link.isCopied = false;
      setLinks((links) => [...links]);
    }, 5000);
  };

  return (
    <div>
      <div className='flex justify-between items-start lg:items-center bg-white mt-4 py-3 px-4 rounded-md flex-col lg:flex-row relative group'>
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

        <div className='absolute right-1 top-1 bg-red w-[18px] h-[18px] text-[12px] cursor-pointer rounded-full group-hover:block lg:right-[98%] lg:hidden lg:px-1.5 text-center' onClick={() => {
          setLinks(links => links.map(lnk => lnk.id !== link.id))
        }}>
          <span>x</span>
        </div>
      </div>
    </div>
  );
};

export default Link;
