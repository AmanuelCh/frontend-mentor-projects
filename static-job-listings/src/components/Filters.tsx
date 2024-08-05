import { FiltersProp } from '../shared/types';

import deleteIcon from '../../public/images/icon-remove.svg';

function Filters({
  filters,
  handleClearFilter,
  handleClearAllFilter,
}: FiltersProp) {
  return (
    <div className='wrapper mt-0 translate-y-[-50%] bg-white px-5 py-5 flex justify-between items-center gap-3 rounded-md drop-shadow-lg lg:px-8'>
      <div className='flex flex-wrap gap-3'>
        {filters.map((filter, i) => (
          <p
            className='flex items-center bg-lighter-grayish-cyan'
            key={i}
          >
            <span className='bg-lighter-grayish-cyan px-2 py-1 text-desaturated-dark-cyan text-[14px] font-lsBold rounded-sm '>
              {filter}
            </span>
            <img
              src={deleteIcon}
              className='h-full p-2 transition cursor-pointer bg-desaturated-dark-cyan hover:bg-very-dark-grayish-cyan'
              onClick={() => handleClearFilter(filter)}
              alt={`remove ${filter} filter`}
            />
          </p>
        ))}
      </div>
      <p
        className='text-dark-grayish-cyan hover:text-desaturated-dark-cyan hover:underline font-lsMedium cursor-pointer'
        onClick={handleClearAllFilter}
      >
        Clear
      </p>
    </div>
  );
}

export default Filters;
