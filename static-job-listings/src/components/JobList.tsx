import { JobListProp } from '../shared/types';

const JobList = ({ job, setJobs, setFilters }: JobListProp) => {
  const skills = job.languages.concat(job.tools);

  return (
    <div className='px-8 py-6 bg-white mb-12 flex flex-col justify-between border-l-4 border-l-desaturated-dark-cyan rounded-md drop-shadow-xl lg:flex-row lg:items-center lg:mb-6'>
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
          <div className='mt-2 flex gap-3 text-dark-grayish-cyan'>
            <p>{job.postedAt}</p>
            <p className='text-2xl translate-y-[-26%]'>.</p>
            <p>{job.contract}</p>
            <p className='text-2xl translate-y-[-26%]'>.</p>
            <p>{job.location}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap gap-2 mt-2 lg:mt-0'>
        <p className='skill'>{job.role}</p>
        <p className='skill'>{job.level}</p>

        {skills.map((skill) => (
          <p className='skill'>{skill}</p>
        ))}
      </div>
    </div>
  );
};

export default JobList;
