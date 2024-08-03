import { JobListingsProp } from '../shared/types';
import JobList from './JobList';

const JobListings = ({ jobs, setJobs, setFilters }: JobListingsProp) => {
  return (
    <div className='w-11/12 max-w-screen-xl mx-auto mt-12 lg:w-3/4'>
      {jobs.map((job) => (
        <JobList
          job={job}
          setJobs={setJobs}
          setFilters={setFilters}
          key={job.id}
        />
      ))}
    </div>
  );
};

export default JobListings;
