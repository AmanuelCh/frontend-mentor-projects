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
  filters: string[];
  handleFilter: (filter: string) => void;
};
export type JobListProp = {
  job: JobsType;
  handleFilter: (filter: string) => void;
};
export type FiltersProp = {
  filters: string[];
  handleClearFilter: (filter: string) => void;
  handleClearAllFilter: () => void;
};
