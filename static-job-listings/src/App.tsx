import { useState } from 'react';
import data from './data/data.json';
import { JobsType } from './shared/types';
import Header from './components/Header';
import JobListings from './components/JobListings';
import Filters from './components/Filters';

function App() {
  const [jobs, setJobs] = useState<JobsType[]>(data);
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <>
      <Header />

      {filters.length ? (
        <Filters
          setJobs={setJobs}
          setFilters={setFilters}
        />
      ) : null}

      <JobListings
        jobs={jobs}
        setJobs={setJobs}
        setFilters={setFilters}
      />
    </>
  );
}

export default App;
