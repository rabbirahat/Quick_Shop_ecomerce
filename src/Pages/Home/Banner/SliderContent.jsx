import React from "react";

const SliderContent = ({ activeIndex, slides }) => {
    return (
        <div className="relative w-full h-[75vh] flex justify-center items-center">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <img
                        className="w-full h-full object-cover rounded-lg"
                        src={slide.image}
                        alt={`Slide ${index}`}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">{slide.title}</h2>
                        <p className="text-lg md:text-xl text-gray-500 mt-2">{slide.description}</p>
                        <div className="mt-6 flex items-center">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-3 bg-white rounded-full shadow-md w-64 sm:w-80 focus:outline-none"
                            />
                            <button className="ml-4 bg-success btn-hover text-white px-6 py-3 rounded-full shadow-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SliderContent;
