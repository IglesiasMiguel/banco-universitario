const Subtitle = ({ title = "", description = "", children }) => {
    
  return (
    <div className="flex flex-col md:items-end items-center space-y-2 md:py-10 py-5 md:w-[80%] md:pr-20">
      <h2 className="uppercase font-bold">
        {title}
      </h2>

      <div
        className="bg-[#49beb7] h-0.5 w-[50%]"
      />
      <p className="md:text-right text-center leading-tight">
        {description}
      </p>
      {children}
    </div>
  );
};

export default Subtitle;