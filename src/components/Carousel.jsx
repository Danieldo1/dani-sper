import Slider from "./Slider";
import TestimonialCard from "./Card";
import {certifications} from "../constants/index";
import { SectionWrapper } from "../hoc";


const Carousel = () => {
    return (
<div className="">
<Slider options={{ align: "start" }}>
  {certifications.map((certifications, i) => (
    <div key={i} className="flex-[0_0_85%] md:flex-[0_0_50%]">
      <TestimonialCard {...certifications} />
    </div>
  ))}
</Slider>
</div>

    )
}
export default SectionWrapper(Carousel,'');