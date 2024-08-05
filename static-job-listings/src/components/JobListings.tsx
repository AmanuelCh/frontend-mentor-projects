import { JobListingsProp } from '../shared/types';
import JobList from './JobList';

const JobListings = ({ jobs, filters, handleFilter }: JobListingsProp) => {
  return (
    <div className={`wrapper ${filters.length ? 'mt-5' : ''}`}>
      {jobs.map((job) => (
        <JobList
          job={job}
          handleFilter={handleFilter}
          key={job.id}
        />
      ))}
    </div>
  );
};

export default JobListings;
