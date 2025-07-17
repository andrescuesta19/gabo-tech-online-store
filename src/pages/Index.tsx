import React from 'react';
import Header from '../components/Header';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen bg-gaboBackground font-inter">
      <Header />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Index;
