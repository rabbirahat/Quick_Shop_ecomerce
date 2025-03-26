import React from 'react';

const Performance = () => {
  const sections = [
    {
      title: "Who we are",
      content: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    },
    {
      title: "Our history",
      content: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    },
    {
      title: "Our mission",
      content: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    }
  ];

  return (
    <div className="my-16">
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <img 
            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-5.png" 
            alt="Our Performance" 
            className="rounded-lg w-full"
          />
        </div>
        <div className="space-y-6">
          <h4 className="text-gray-500 uppercase">Our performance</h4>
          <h3 className="font-bold text-5xl text-gray-900 leading-tight">
            Your Partner for <br /> e-commerce <br /> grocery solution
          </h3>
          <p className="text-gray-500">
            Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          </p>
          <p className="text-gray-500">
            Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="p-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h3>
            <p className="text-gray-500">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;