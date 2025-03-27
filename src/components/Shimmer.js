const Shimmer = () => {
    return (
      <div className="bg-gray-400" data-testid="shimmer">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="bg-gray-500 m-6 w-[256px]">sdsdds</div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;