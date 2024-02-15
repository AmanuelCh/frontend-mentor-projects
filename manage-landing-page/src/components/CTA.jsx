import bgSimplifyMobile from "../images/bg-simplify-section-mobile.svg";
import bgSimplifyDesktop from "../images/bg-simplify-section-desktop.svg";

const CTA = () => {
  return (
    <div className="bg-brightRed py-24 w-full relative">
      <div className="container mx-auto px-6 text-white flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div>
          <h3 className="text-5xl font-bold text-center leading-[1.1] lg:max-w-md lg:text-left lg:text-4xl relative z-10">
            Simplify how your team works today.
          </h3>
        </div>
        <div>
          <button className="btn btn-secondary relative z-10">
            Get started
          </button>
        </div>
      </div>

      <div className="absolute top-[50%] left-0 translate-y-[-50%] lg:hidden">
        <img
          src={bgSimplifyMobile}
          className="w-28 h-full"
          alt="CTA background"
        />
      </div>
      <div className="hidden absolute bottom-0 -right-48 lg:block w-[105%]">
        <img src={bgSimplifyDesktop} className="w-full" alt="CTA background" />
      </div>
    </div>
  );
};

export default CTA;
