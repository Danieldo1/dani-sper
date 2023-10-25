

const TestimonialCard = (props) => {
  return (
    <div className="py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      {/* <div className="flex justify-center md:justify-end -mt-16">
      </div> */}
      <div>
        <div>
        <img
          alt={props.title}
          className="w-400 h-400 object-cover rounded-md border-2 border-indigo-500"
          height={460}
          width={460}
          src={props.imgSrc}
        />
        </div>
        <h2 className="text-tertiary text-3xl font-semibold mt-5">{props.title}</h2>
      </div>
      <div 
      className="flex mt-4" >
        <a href={props.link} className="text-xl font-medium text-indigo-500" target="_blank" rel="noopener noreferrer" >
          View
        </a>
      </div>
    </div>
  );
};

export default TestimonialCard;
