import { Dispatch, SetStateAction } from 'react';

export type JobsType = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};
export type JobListingsProp = {
  jobs: JobsType[];
  setJobs: Dispatch<SetStateAction<JobsType[]>>;
  setFilters: Dispatch<SetStateAction<string[]>>;
};
export type JobListProp = {
  job: JobsType;
  setJobs: Dispatch<SetStateAction<JobsType[]>>;
  setFilters: Dispatch<SetStateAction<string[]>>;
};
export type FiltersProp = {
  setJobs: Dispatch<SetStateAction<JobsType[]>>;
  setFilters: Dispatch<SetStateAction<string[]>>;
};
