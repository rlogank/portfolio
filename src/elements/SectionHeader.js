const SectionHeader = (props) => {
  return (
    <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-2.5">
      <h2 data-aos="fade" className="w-full text-4xl font-bold">
        {props.title}{" "}
        <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
          {props.span}
        </span>
      </h2>
      <p data-aos="fade" className="md:w-4/6">
        {props.body}
      </p>
    </div>
  );
};

export default SectionHeader;
