import Slider from "./Slider";
import TestimonialCard from "./Card";
import testimonials from "../assets/data.json";
import { SectionWrapper } from "../hoc";


const Carousel = () => {
    return (
<div className="w-screen">
<Slider options={{ align: "center" }}>
  {testimonials.map((testimonial, i) => (
    <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
      <TestimonialCard {...testimonial} />
    </div>
  ))}
</Slider>
</div>

    )
}
export default SectionWrapper(Carousel,'');