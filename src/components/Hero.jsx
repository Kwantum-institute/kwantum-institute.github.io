const Hero = () => {
  return (
    <div className="hidden lg:flex w-3/4 mt-10 mb-[200px] items-center">
      <div className="pt-10 w-2/3 bg-white h-[1000px] skew-y-[-15deg] border-8">
        <h1 className="mx-20 text-center text-6xl text-3d-s skew-y-0 text-black font-black">
          Our Top Picks of the Day
        </h1>
      </div>
      <div className="pt-10 w-2/3 bg-white h-[1000px] skew-y-[15deg] border-8"></div>
    </div>
  );
};

export default Hero;
