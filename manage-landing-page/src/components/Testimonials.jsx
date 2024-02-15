
import {testimonials} from '../constants/index.js'

const Testimonials = () => {
  return (
    <div className="container mx-auto flex flex-col items-center px-6 my-20 space-y-28 md:mb-32">
      <h3 className="max-w-md font-bold text-center text-darkBlue text-3xl lg:text-left lg:4xl">What they’ve said</h3>

      <div className='grid grid-cols-1 gap-24 md:grid-cols-2 xl:grid-cols-4'
       >
        {
          testimonials.map(testimony=> (
            <div className='p-6 pt-0 pb-10 bg-veryLightGray'>
              <div className='flex flex-col items-center gap-4'>
                <img src={testimony.imgURL} className='w-[80px] -mt-[40px]' alt={testimony.name} />
                <h3 className='text-darkBlue text-lg font-semibold text-center'>{testimony.name}</h3>
                <p className="text-darkGrayishBlue text-center">{testimony.content}</p>
              </div>
            </div>
          ))
        }
      </div>
      
      <div>
        <button className="btn btn-primary">Get started</button>
      </div>
    </div>
  );
};

export default Testimonials;
