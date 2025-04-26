
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import UkraineMap from '@/components/UkraineMap';
import ResearchStats from '@/components/ResearchStats';
import PlotGrid from '@/components/PlotGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ResearchStats />
      <UkraineMap />
      <PlotGrid />
      <Footer />
    </div>
  );
};

export default Index;
