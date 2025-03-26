import React from 'react';
import Counter from './Counter';
import Performance from './Performance';
import Services from './Provide';
import Welcome from './Welcome';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Welcome />
      <Services />
      <Performance />
      <Counter />
    </div>
  );
};

export default About;