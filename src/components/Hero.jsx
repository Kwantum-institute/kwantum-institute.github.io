const Hero = () => {
  return (
    <div className="flex w-3/4 mt-10 mb-[200px] items-center">
      <div className="flex flex-col gap-10 w-full pt-10 lg:w-2/3 bg-gray-700 h-[1000px] lg:skew-y-[-15deg] border-8">
        <h1 className="mx-10 lg:mx-20 text-center text-5xl lg:text-6xl text-3d-s skew-y-0 font-black">
          Our Top Picks of the Day
        </h1>
        <section id="projects" className="mx-20">
          <div className="project-tile">
            <a href="python-vs-java.html">
              <h3>Technical Documentation - Java vs Python</h3>
              <p>
                Documentation comparing Java and Python programming languages.
              </p>
            </a>
          </div>
          <div className="project-tile">
            <a href="rpg_game.html">
              <h3>RPG - Dragon Repeller</h3>
              <p>
                An interactive RPG game where you must defeat the dragon
                preventing people from leaving the town.
              </p>
            </a>
          </div>
          <div className="project-tile">
            <a href="platformgame.html">
              <h3>Java Platform Game Project</h3>
              <p>
                An interactive platform game where you must avoid obstacles.
              </p>
            </a>
          </div>
        </section>
      </div>
      <div className="hidden lg:flex pt-10 w-2/3 bg-gray-600 h-[1000px] skew-y-[15deg] border-8"></div>
    </div>
  );
};

export default Hero;
