import { JobListProp } from '../shared/types';

const JobList = ({ job, handleFilter }: JobListProp) => {
  const skills = job.languages.concat(job.tools);
  // creating another tags array coz reverse() method mutates an array and returns a reference to the same array
  const tags = skills.reverse().concat(job.level, job.role).reverse();

  const handleFilterClick = (target: EventTarget) => {
    // @ts-expect-error
    handleFilter(target.textContent);
  };

  return (
    <div
      className={`px-5 py-6 bg-white mb-12 flex flex-col justify-between border-l-4  rounded-md drop-shadow-xl lg:flex-row lg:items-center lg:mb-6 lg:px-8 ${
        job.new && job.featured ? 'border-l-desaturated-dark-cyan' : ''
      }`}
    >
      <div className='flex flex-col lg:gap-3 lg:flex-row lg:items-center'>
        <div className='-mt-12 lg:mt-0'>
          <img
            src={job.logo}
            className='w-[50px] lg:w-[85%]'
            alt={job.company}
          />
        </div>
        <div>
          <div className='flex items-center mt-3 lg:mt-0'>
            <p className='text-desaturated-dark-cyan font-lsBold'>
              {job.company}
            </p>
            {job.new ? (
              <p className='bg-desaturated-dark-cyan text-white rounded-full px-3 py-[.5px] text-[14px] font-lsBold h-full ml-6'>
                NEW
              </p>
            ) : null}
            {job.featured ? (
              <p className='bg-very-dark-grayish-cyan text-light-grayish-cyan rounded-full px-3 py-[.5px] text-[14px] font-lsBold h-full ml-2'>
                FEATURED
              </p>
            ) : null}
          </div>
          <p className='mt-2 text-very-dark-grayish-cyan text-lg font-lsBold cursor-pointer transition-colors md:text-xl md:mt-3 hover:text-desaturated-dark-cyan'>
            {job.position}
          </p>
          <div className='mt-2 flex gap-3 text-dark-grayish-cyan border-b pb-2 sm:border-b-0 sm:pb-0'>
            <p>{job.postedAt}</p>
            <p className='text-2xl translate-y-[-26%]'>.</p>
            <p>{job.contract}</p>
            <p className='text-2xl translate-y-[-26%]'>.</p>
            <p>{job.location}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap gap-2 mt-4 sm:mt-2 lg:mt-0'>
        {tags.map((tag, i) => (
          <p
            className='skill'
            onClick={(e) => handleFilterClick(e.target)}
            key={i}
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default JobList;
