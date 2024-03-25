const Link = ({ link }) => {
  return (
    <div>
      <div className='flex justify-between items-start lg:items-center bg-white mt-4 py-3 px-4 rounded-md flex-col lg:flex-row'>
        <p className='text-veryDarkBlue w-[90%] truncate border-b border-gray-300 pb-2 lg:w-auto lg:border-b-0 lg:pb-0'>
          {link.link}
        </p>

        <div className='flex items-start gap-4 flex-col w-full pt-2 lg:w-auto lg:flex-row lg:pt-0 lg:items-center'>
          <p className='text-cyanDefault'>{link.shortenedLink}</p>

          <button
            className={`btn rounded-md py-2 w-full lg:w-auto lg:py-3 hover:opacity-50 ${
              link.isCopied ? 'bg-darkViolet' : ''
            }`}
          >
            {link.isCopied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Link;
