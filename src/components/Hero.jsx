import { setGlobalState, useGlobalState } from "../store";
const Hero = () => {
  const [stats] = useGlobalState("stats");

  return (
    <div className="text-center bg-white text-gray-800 py-24 px-6">
      <h1
        className="text-5xl md:text-6xl xl:text-7xl font-bold
      tracking-tight mb-12"
      >
        <span className="capitalize">Where dreams find their wings!</span>
        <br />
        <span className="uppercase text-purple-600 text-opacity-75">
          FundRaise
        </span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-purple-600 bg-opacity-75
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-purple-700 bg-opacity-75"
          onClick={() => setGlobalState("createModal", "scale-100")}
        >
          Add Project
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-purple-600 border-opacity-75
        font-medium text-xs leading-tight uppercase text-purple-600 text-opacity-75
        rounded-full shadow-md bg-transparent hover:bg-purple-700 bg-opacity-75
        hover:text-white"
        >
          Back Projects
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-purple-900 text-opacity-75
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-purple-900 text-opacity-75
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-purple-900 text-opacity-75
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
