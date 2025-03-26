import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="border flex flex-col justify-center rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="max-h-40 mx-auto p-5">
        <img src={icon} alt={title} />
      </div>
      <h1 className="text-center font-bold py-4 text-2xl text-gray-900">{title}</h1>
      <p className="text-center text-gray-500 text-lg">{description}</p>
      <span className="text-center my-4">
        <a href="#" className="text-green-600 font-bold hover:underline">Read more</a>
      </span>
    </div>
  );
};

const Services = () => {
  const services = Array(6).fill({
    icon: "http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg",
    title: "Best Prices & Offers",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
  });

  return (
    <div className="my-16">
      <div className="text-center mb-12">
        <h1 className="font-bold text-5xl mb-2">What We Provide?</h1>
        <img 
          src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/wave.png" 
          alt="Wave decoration" 
          className="mx-auto"
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;