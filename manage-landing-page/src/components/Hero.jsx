import heroImage from "../images/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
      <div className="flex flex-col mb-32 space-y-6 md:w-1/2">
        <h3 className="max-w-md text-4xl font-bold text-center text-darkBlue mt-6 md:text-5xl md:text-left md:mt-0">Bring everyone together to build better products</h3>
        <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
          </p>
          <div className="flex items-center justify-center md:block pt-3">
          <a href="#" className="bg-brightRed p-3 px-6 rounded-full text-white transition-opacity hover:opacity-70">Get started</a>
          </div>
        
      </div>
      <div className="md:w-1/2">
        <img src={heroImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
