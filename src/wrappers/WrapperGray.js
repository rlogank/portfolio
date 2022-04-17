const WrapperGray = ({ children }) => {
  return (
    <div className="min-h-[50vh] w-full bg-gray-100 px-5 pt-20 pb-20 lg:py-40">
      <div className="mx-auto flex max-w-7xl flex-col">{children}</div>
    </div>
  );
};

export default WrapperGray;
