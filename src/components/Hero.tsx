
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-wheat-light/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-wheat-pattern opacity-10"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <div className="h-2 w-2 rounded-full bg-crop-green animate-pulse"></div>
                <span className="text-sm text-soil-brown font-medium">Agricultural Research Platform</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-soil-brown mb-6">
              Ukrainian Agriculture <span className="text-crop-green">Plot Research</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore agricultural research data across Ukraine's diverse landscapes. 
              Access soil analysis, crop yield predictions, and climate impact studies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-ukraine-blue hover:bg-ukraine-blue/90 text-white px-6 py-2">
                Explore Plots
              </Button>
              <Button variant="outline" className="border-soil-brown text-soil-brown hover:bg-soil-brown/10">
                View Research
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-crop-green"></div>
                  <span className="text-sm font-medium text-soil-brown">Featured Agricultural Plot</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Kherson Region, Ukraine • Sunflower Research</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
