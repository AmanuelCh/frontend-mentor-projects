const About = () => {
  return (
    <div className="container mx-auto my-20 flex flex-col items-center justify-between px-6 lg:flex-row lg:items-start md:my-32">
      <div className="space-y-6 mb-12 md:w-1/2 lg:mb-0">
        <h3 className="max-w-md font-bold text-center text-darkBlue text-3xl lg:text-left lg:4xl">
          What’s different about Manage?
        </h3>
        <p className="max-w-sm text-center text-darkGrayishBlue lg:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="flex flex-col gap-12 md:gap-6 md:w-1/2">
        <div className="md:flex items-start gap-6">
          <div className="flex items-stretch md:items-start">
            <p className="number">01</p>
            <div className="bg-veryPaleRed w-full rounded-full -ml-8 -z-10 flex items-center md:hidden">
              <h3 className="ml-12 text-darkBlue text-[15px] font-semibold">
                Track company-wide progress
              </h3>
            </div>
          </div>
          <div className="space-y-4 hidden pt-2 ml-2 md:block">
            <h3 className="text-darkBlue text-lg font-semibold">
              Track company-wide progress
            </h3>
            <p className="text-darkGrayishBlue">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className="mt-4 md:hidden">
            <p className="text-darkGrayishBlue">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        <div className="md:flex items-start gap-6">
          <div className="flex items-stretch md:items-start">
            <p className="number">02</p>
            <div className="bg-veryPaleRed w-full rounded-full -ml-8 -z-10 flex items-center md:hidden">
              <h3 className="ml-12 text-darkBlue text-base font-semibold text-[15px]">
                Advanced built-in reports
              </h3>
            </div>
          </div>
          <div className="space-y-4 hidden pt-2 ml-2 md:block">
            <h3 className="text-darkBlue text-lg font-semibold">
              Advanced built-in reports
            </h3>
            <p className="text-darkGrayishBlue">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className="mt-4 md:hidden">
            <p className="text-darkGrayishBlue">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>
        <div className="md:flex items-start gap-6">
          <div className="flex items-stretch md:items-start">
            <p className="number">03</p>
            <div className="bg-veryPaleRed w-full rounded-full -ml-8 -z-10 flex items-center md:hidden">
              <h3 className="ml-12 text-darkBlue text-base font-semibold text-[14px]">
                Everything you need in one place
              </h3>
            </div>
          </div>
          <div className="space-y-4 hidden pt-2 ml-2 md:block">
            <h3 className="text-darkBlue text-lg font-semibold">
              Everything you need in one place
            </h3>
            <p className="text-darkGrayishBlue">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
          <div className="mt-4 md:hidden">
            <p className="text-darkGrayishBlue">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
