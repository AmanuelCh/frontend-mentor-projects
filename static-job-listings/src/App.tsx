import { useState } from 'react';
import data from './data/data.json';
import { JobsType } from './shared/types';
import Header from './components/Header';
import JobListings from './components/JobListings';
import Filters from './components/Filters';

function App() {
  const [jobs, setJobs] = useState<JobsType[]>(data);
  const [filters, setFilters] = useState<string[]>([]);

  const handleFilterClick = (filter: string) => {
    if (filters.includes(filter)) return;

    setFilters((filters) => [...filters, filter]);

    setJobs((jobs) =>
      jobs.filter(
        (job) =>
          job.role === filter ||
          job.level === filter ||
          job.languages.includes(filter) ||
          job.tools.includes(filter)
      )
    );
  };
  const handleClearFilter = (filter: string) => {
    setFilters((filters) =>
      filters.filter((prevFilter) => prevFilter !== filter)
    );
    setJobs((jobs) =>
      jobs.filter(
        (job) =>
          job.role !== filter ||
          job.level !== filter ||
          !job.languages.includes(filter) ||
          !job.tools.includes(filter)
      )
    );
  };
  const handleClearAllFilter = () => {
    setFilters([]);
    setJobs(data);
  };

  return (
    <>
      <Header />

      {filters.length ? (
        <Filters
          filters={filters}
          handleClearFilter={handleClearFilter}
          handleClearAllFilter={handleClearAllFilter}
        />
      ) : null}

      <JobListings
        jobs={jobs}
        filters={filters}
        handleFilter={handleFilterClick}
      />
    </>
  );
}

export default App;
