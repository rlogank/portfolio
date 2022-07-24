const ProjectHeader = (props) => {
  return (
    <div className="mx-auto flex w-full flex-col gap-2.5 bg-white bg-opacity-10 py-10 px-5 dark:bg-opacity-10">
      {props.arrows}
      <div className="mx-auto w-full max-w-screen-lg">
        <h2 className="mb-2.5 w-full text-2xl font-bold lg:text-4xl">
          {props.title} <span className="">{props.span}</span>
        </h2>
        <p className="md:w-4/6">{props.body}</p>
      </div>
    </div>
  );
};

export default ProjectHeader;
