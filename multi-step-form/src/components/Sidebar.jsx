import Steps from './ui/Steps';

const nums = [
  {
    num: 1,
  },
  {
    num: 2,
  },
  {
    num: 3,
  },
  {
    num: 4,
  },
];

const Sidebar = ({ currentIndex, onHandleClick }) => {
  return (
    <div className='lg:p-6 lg:pl-8 lg:rounded-xl text-alabaster lg:relative absolute top-0 left-0 sidebar'>
      <Steps
        currentIndex={currentIndex}
        onHandleClick={onHandleClick}
      />

      <div className='lg:hidden absolute top-[10%] left-[50%] translate-x-[-50%] flex items-center gap-5'>
        {nums.map((num, index) => (
          <div
            className={`${
              currentIndex >= index + 1
                ? 'bg-lightBlue text-black border border-lightBlue'
                : 'border'
            } py-1 px-3 rounded-full cursor-pointer`}
            onClick={() => onHandleClick(index + 1)}
            key={index}
          >
            {num.num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
