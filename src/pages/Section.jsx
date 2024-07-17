const Section = ({ title, content }) => {
  return (
    <div className="flex flex-col my-[190px] lg:my-[250px] items-center justify-center w-full">
      <div className="flex flex-col w-3/4 lg:w-1/2 gap-7">
        <h1 className="text-6xl font-black">{title}</h1>
        {content}
      </div>
    </div>
  );
};

export default Section;
