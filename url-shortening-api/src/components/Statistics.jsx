const tempLinks = [
  {
    id: 1,
    link: 'htts://www.linkedin.com/company/non-of-your-business',
    shortenedLink: 'htts://rel.ink/k342wdfs',
    isCopied: false,
  },
  {
    id: 2,
    link: 'htts://www.linkedin.com/company/non-of-your-business',
    shortenedLink: 'htts://rel.ink/k342wdfs',
    isCopied: true,
  },
];

const Statistics = () => {
  return (
    <div className='statistics max-w-[90%] container mx-auto lg:max-w-[976px] xl:max-w-[1440px]'>
      {tempLinks.map((link) => (
        <div
          className='flex justify-between items-start lg:items-center bg-white mt-4 py-3 px-4 rounded-md flex-col lg:flex-row'
          key={link.id}
        >
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
      ))}

      <p className='mt-16'>Advanced Statistics</p>
    </div>
  );
};

export default Statistics;
