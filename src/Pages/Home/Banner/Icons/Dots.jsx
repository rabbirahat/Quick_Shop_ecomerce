import React from "react";

const Dots = ({ activeIndex, slides, onClick }) => {
    return (
        <div className="absolute bottom-6 flex justify-center w-full">
            {slides.map((_, index) => (
                <div
                    key={index}
                    onClick={() => onClick(index)}
                    className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                        index === activeIndex ? "bg-success" : "bg-gray-400"
                    }`}
                />
            ))}
        </div>
    );
};

export default Dots;
