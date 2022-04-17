const WrapperTop = ({ children }) => {
  return (<>   
    <div className="w-full bg-white lg:pb-40 pb-20 pt-20 lg:pt-0 px-5">
      <div className="flex mx-auto max-w-7xl">{children}</div>
    </div>
  </> );
};

export default WrapperTop;
