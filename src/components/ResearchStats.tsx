
import React from 'react';
import StatCard from './StatCard';
import { 
  TreeDeciduous, 
  LandPlot, 
  Map as MapIcon,
  ChartBar 
} from 'lucide-react';

const ResearchStats = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-soil-brown mb-2">Agricultural Research Data</h2>
        <p className="text-gray-500">Overview of Ukrainian agricultural research and field studies</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Research Plots"
          value="248"
          description="Agricultural research plots across Ukraine"
          icon={<LandPlot className="h-5 w-5" />}
          trendValue="+12% from last year"
          trendUp={true}
        />
        
        <StatCard
          title="Crop Varieties"
          value="52"
          description="Different crop varieties under study"
          icon={<TreeDeciduous className="h-5 w-5" />}
          trendValue="+8 new varieties"
          trendUp={true}
        />
        
        <StatCard
          title="Regions Covered"
          value="18"
          description="Ukrainian regions with active research"
          icon={<MapIcon className="h-5 w-5" />}
        />
        
        <StatCard
          title="Average Yield Increase"
          value="17%"
          description="Improvement from applied research"
          icon={<ChartBar className="h-5 w-5" />}
          trendValue="+5% vs previous research"
          trendUp={true}
        />
      </div>

      <div className="mt-12 bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <h3 className="text-xl font-bold text-soil-brown">Research Impact</h3>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">Last 12 Months</button>
            <button className="px-3 py-1 text-xs rounded-full bg-ukraine-blue text-white">All Time</button>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <div>
                <span className="text-sm font-medium text-gray-700">Wheat Yield Improvement</span>
                <span className="ml-2 text-xs bg-wheat-gold/20 text-soil-brown px-2 py-0.5 rounded-full">+23%</span>
              </div>
              <span className="text-sm text-crop-green">359 plots</span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-wheat-gold rounded-full w-[85%] origin-left animate-grow"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <div>
                <span className="text-sm font-medium text-gray-700">Sunflower Oil Content</span>
                <span className="ml-2 text-xs bg-ukraine-yellow/20 text-soil-brown px-2 py-0.5 rounded-full">+18%</span>
              </div>
              <span className="text-sm text-crop-green">215 plots</span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-ukraine-yellow rounded-full w-[72%] origin-left animate-grow"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <div>
                <span className="text-sm font-medium text-gray-700">Corn Disease Resistance</span>
                <span className="ml-2 text-xs bg-crop-green/20 text-soil-brown px-2 py-0.5 rounded-full">+31%</span>
              </div>
              <span className="text-sm text-crop-green">182 plots</span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-crop-green rounded-full w-[65%] origin-left animate-grow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchStats;
