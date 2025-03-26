import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const StatItem = ({ value, label }) => {
  return (
    <div className="text-center py-6">
      <h1 className="font-bold text-6xl text-white">
        <span>{value}</span>+
      </h1>
      <h4 className="text-xl text-white">{label}</h4>
    </div>
  );
};

const TeamMember = ({ image, name, position }) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <img src={image} alt={name} className="rounded-lg w-full" />
      <div className="relative mt-[-20%] translate-y-0 hover:-translate-y-2 duration-300 cursor-pointer border bg-white w-[90%] mx-auto rounded-xl shadow-lg p-6">
        <h1 className="text-center font-bold text-2xl pt-3">{name}</h1>
        <h3 className="text-center text-lg text-gray-500">{position}</h3>
        <div className="flex justify-center gap-4 py-6 text-green-600 text-xl">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="grid grid-cols-2 items-center p-4 bg-gray-50 rounded-md">
      <div className="mx-auto">
        <img src={icon} alt={title} />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Counter = () => {
  const stats = [
    { value: 12, label: "Glorious years" },
    { value: 36, label: "Happy clients" },
    { value: 58, label: "Projects complete" },
    { value: 24, label: "Team advisor" },
    { value: 26, label: "Products Sale" }
  ];

  const teamMembers = [
    {
      image: "http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-6.png",
      name: "Dilan Specter",
      position: "Head Engineer"
    },
    {
      image: "http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-8.png",
      name: "Dilan Specter",
      position: "Head Engineer"
    }
  ];

  const features = Array(5).fill({
    icon: "http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg",
    title: "Best prices & offers",
    description: "Orders $50 or more"
  });

  return (
    <div className="my-16">
      {/* Stats Section */}
      <div className="grid md:grid-cols-5 gap-4 bg-gray-800 rounded-lg py-14 my-8 text-white">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
      
      {/* Team Section */}
      <div className="py-10">
        <div className="text-center mb-8">
          <h1 className="font-bold text-5xl mb-2">Our Team</h1>
          <img 
            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/wave.png" 
            alt="Wave decoration" 
            className="mx-auto"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-gray-500 uppercase">Our Team</h4>
            <h3 className="font-bold text-5xl text-gray-900 leading-normal">
              Meet Our <br /> Expert Team
            </h3>
            <p className="text-gray-500">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            </p>
            <p className="text-gray-500">
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </p>
            <button className="px-6 py-3 bg-green-600 text-white rounded font-bold hover:bg-green-700 transition-colors">
              View All Members
            </button>
          </div>
          
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-gray-100 bg-right-bottom bg-cover bg-no-repeat rounded-lg py-16 px-8 mb-16">
        <div className="max-w-2xl">
          <h1 className="font-bold text-5xl text-gray-900 leading-normal mb-4">
            Stay home & get your <br />
            needs from our shop
          </h1>
          <h5 className="text-lg mb-6">Start You'r Daily Shopping with Nest Mart</h5>
          <div className="flex">
            <input 
              type="text" 
              className="rounded-full pr-32 pl-6 py-3 flex-grow" 
              placeholder="Your Email Address" 
            />
            <button className="bg-green-600 rounded-full px-8 py-3 text-white ml-[-40px] hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="grid md:grid-cols-5 gap-4 my-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Counter;