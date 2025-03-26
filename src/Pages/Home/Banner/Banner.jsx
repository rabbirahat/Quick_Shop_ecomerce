import { useEffect, useState } from "react";
import SlideInfo from "./SlideInfo";
import Slide from "./Slide";
import Arrow from "./icons/Arrow";
import Dots from "./Icons/Dots";
import SliderContent from "./SliderContent";


const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = SlideInfo.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[75vh] mx-auto overflow-hidden">
            <SliderContent activeIndex={activeIndex} slides={SlideInfo} />
            
            <Arrow
                prevSlide={() => setActiveIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))}
                nextSlide={() => setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides)}
            />

            <Dots activeIndex={activeIndex} slides={SlideInfo} onClick={(index) => setActiveIndex(index)} />
        </div>
    );
};

export default Banner;