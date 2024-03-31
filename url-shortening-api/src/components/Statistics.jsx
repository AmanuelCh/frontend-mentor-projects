import Link from './Link';

import BrandSVG from '../assets/icon-brand-recognition.svg';
import RecordsSVG from '../assets/icon-detailed-records.svg';
import CustomizableSVG from '../assets/icon-fully-customizable.svg';

const statistics = [
  {
    id: 1,
    imgSrc: BrandSVG,
    title: 'Brand Recognition',
    desc: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    id: 2,
    imgSrc: RecordsSVG,
    title: 'Detailed Records',
    desc: ' Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    id: 3,
    imgSrc: CustomizableSVG,
    title: 'Fully Customizable',
    desc: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];

const Statistics = ({ links, setLinks }) => {
  return (
    <div className='statistics max-w-[90%] container mx-auto lg:max-w-[976px] xl:max-w-[1440px]'>
      {links.map((link) => (
        <Link
          link={link}
          setLinks={setLinks}
          key={link.id}
        />
      ))}

      <div className='mt-20'>
        <p className='text-veryDarkBlue text-3xl font-bold text-center'>
          Advanced Statistics
        </p>

        <p className='body-text text-center mt-6'>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className='flex flex-col gap-24 mt-28 lg:flex-row lg:gap-8 lg:items-start'>
          {statistics.map((stat) => (
            <div
              className='px-6 relative bg-white shadow-sm pb-8 rounded-md lg:pb-10 stats'
              key={stat.id}
            >
              <div className='absolute left-1/2 -top-1/2 translate-y-[90%] translate-x-[-50%] bg-darkViolet p-5 rounded-full lg:left-1/4 lg:translate-y-[110%]'>
                <img
                  src={stat.imgSrc}
                  className=''
                  alt='Brand icon'
                />
              </div>

              <p className='text-2xl font-semibold text-veryDarkBlue mt-16 text-center lg:text-left'>
                {stat.title}
              </p>

              <p className='body-text text-center mt-4 lg:text-left'>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
