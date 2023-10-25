import React from "react"; // Import React if not already imported
import useEmblaCarousel from 'embla-carousel-react'

const Slider = ({ children, options }) => {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    ...options,
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-10">{children}</div>
    </div>
  );
};

export default Slider;