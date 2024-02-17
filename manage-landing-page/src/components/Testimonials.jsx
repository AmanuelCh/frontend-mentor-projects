import Carousel from "nuka-carousel";
import { testimonials } from "../constants/index.js";
import useMedia from "use-media";

const Testimonials = () => {
  const isWide = useMedia({ minWidth: "976px" });

  const controls = {
    centerLeft: "<",
    centerRight: ">",
  };

  return (
    <div className="container mx-auto flex flex-col items-center px-6 my-20 space-y-28 md:mb-32">
      <h3 className="max-w-md font-bold text-center text-darkBlue text-3xl lg:text-left lg:4xl">
        What they’ve said
      </h3>

      <Carousel
        autoplay={true}
        autoplayInterval={5000}
        scrollMode={"remainder"}
        slidesToShow={isWide ? 3 : 1}
        withoutControls={isWide ? true : false}
        wrapAround={isWide ? true : false}
        pauseOnHover={false}
        renderCenterLeftControls={controls.centerLeft}
        renderCenterRightControls={controls.centerRight}
        className="overflow-x-hidden max-w-sm lg:max-w-full"
      >
        {testimonials.map((testimony) => (
          <div
            className="p-6 pt-0 pb-10 bg-veryLightGray mt-[40px] mr-6 ml-6"
            key={testimony.id}
          >
            <div className="flex flex-col items-center gap-4">
              <img
                src={testimony.imgURL}
                className="w-[80px] -mt-[40px]"
                alt={testimony.name}
              />
              <h3 className="text-darkBlue text-lg font-semibold text-center">
                {testimony.name}
              </h3>
              <p className="text-darkGrayishBlue text-center max-w-[20rem] lg:max-w-lg">
                {testimony.content}
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      <div>
        <button className="btn btn-primary">Get started</button>
      </div>
    </div>
  );
};

export default Testimonials;
