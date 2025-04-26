
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-ukraine-blue flex items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-ukraine-yellow"></div>
          </div>
          <h1 className="text-xl md:text-2xl font-bold flex items-center">
            <span className="text-soil-brown">Agri</span>
            <span className="text-crop-green">Plot</span>
            <span className="text-xs ml-2 bg-ukraine-yellow text-ukraine-blue px-1 py-0.5 rounded">UA</span>
          </h1>
        </div>
        
        <div className="flex-1 max-w-md mx-auto md:mx-0">
          <div className="relative">
            <Input 
              placeholder="Search plots, research, data..."
              className="pl-10 border border-gray-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
        
        <nav className="flex items-center space-x-4">
          <a href="#dashboard" className="text-soil-brown hover:text-soil-light font-medium text-sm">Dashboard</a>
          <a href="#plots" className="text-soil-brown hover:text-soil-light font-medium text-sm">Plots</a>
          <a href="#research" className="text-soil-brown hover:text-soil-light font-medium text-sm">Research</a>
          <Button className="bg-ukraine-blue hover:bg-ukraine-blue/90 text-white">Login</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
