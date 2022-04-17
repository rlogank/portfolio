const WrapperBottom = ({ children }) => {
  return (
    <div className="min-h-[50vh] w-full bg-white pt-20 pb-20 lg:py-40">
      <div className="mx-auto flex max-w-7xl">{children}</div>
    </div>
  );
};

export default WrapperBottom;
