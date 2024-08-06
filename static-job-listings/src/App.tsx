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
    // Check if the filter is already applied
    if (filters.includes(filter)) return;

    // Add the new filter to the filters state
    setFilters((prevFilters) => [...prevFilters, filter]);

    // Filter the jobs based on the new filter
    setJobs((prevJobs) =>
      prevJobs.filter((job) =>
        [job.role, job.level, ...job.languages, ...job.tools].includes(filter)
      )
    );
  };

  const handleClearFilter = (filter: string) => {
    //  Update filters to remove the specified filter
    setFilters((prevFilters) => {
      const updatedFilters = prevFilters.filter(
        (prevFilter) => prevFilter !== filter
      );

      // Filter jobs based on the updated filters
      const filteredJobs = data.filter((job) => {
        const matchesRole = updatedFilters.includes(job.role);
        const matchesLevel = updatedFilters.includes(job.level);
        const matchesLanguages = updatedFilters.every((lang) =>
          job.languages.includes(lang)
        );
        const matchesTools = updatedFilters.every((tool) =>
          job.tools.includes(tool)
        );

        // Return true if the job matches any of the remaining filters
        return matchesRole || matchesLevel || matchesLanguages || matchesTools;
      });

      // Update jobs state with the filtered jobs
      !updatedFilters.length ? setJobs(data) : setJobs(filteredJobs);

      // Return the updated filters
      return updatedFilters;
    });
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
