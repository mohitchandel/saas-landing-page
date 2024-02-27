import { Button } from "@nextui-org/react";

export const HeroSection = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 h-[90vh]">
        <div className="animate-pulse circlePosition w-[520px] h-[400px] bg-[#ff77f6] rounded-[100%] absolute z-1 top-[50%] left-[10%] translate-x-[-50%] blur-[90px]"></div>
        <div className="animate-pulse circlePosition w-[420px] h-[350px] bg-[#77ffdf] rounded-[100%] absolute z-1 top-[25%] left-[80%] sm-left[10%] translate-x-[-50%] blur-[90px]"></div>
        <div className="relative z-8 bg-blend-saturation py-8 px-4 max-w-screen-xl text-center lg:py-16 lg:px-12 container mx-auto">
          <h1 className="font-poppins mb-4 capitalize text-4xl text-center  font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-8xl dark:text-white mx-auto">
            Effortlessly Streamline{" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Your Business
            </span>{" "}
            With our Custom Solutions.
          </h1>
          <p className="mb-8 mt-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Company we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Button endContent={<ArrowIcon />}>Learn more</Button>
            <Button endContent={<VideoIcon />}>Watch Demo</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export const ArrowIcon = ({ fill = "currentColor", ...props }) => {
  return (
    <svg
      className="ml-2 -mr-1 w-5 h-5"
      fill={fill}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export const VideoIcon = ({ fill = "currentColor", ...props }) => {
  return (
    <svg
      className="mr-2 -ml-1 w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
    </svg>
  );
};
