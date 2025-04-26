
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';

interface Plot {
  id: number;
  title: string;
  location: string;
  area: string;
  imageUrl: string;
  tags: string[];
  date: string;
}

const plots: Plot[] = [
  {
    id: 1,
    title: 'Sunflower Research Plot',
    location: 'Kherson Region',
    area: '15.3 hectares',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    tags: ['sunflower', 'organic'],
    date: '2024-04-15',
  },
  {
    id: 2,
    title: 'Wheat Production Study',
    location: 'Lviv Oblast',
    area: '23.7 hectares',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    tags: ['wheat', 'irrigation'],
    date: '2024-03-22',
  },
  {
    id: 3,
    title: 'Corn Yield Analysis',
    location: 'Kyiv Region',
    area: '18.2 hectares',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    tags: ['corn', 'fertilizer'],
    date: '2024-04-02',
  },
  {
    id: 4,
    title: 'Soybean Growth Study',
    location: 'Odesa Region',
    area: '12.5 hectares',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    tags: ['soybean', 'soil-health'],
    date: '2024-03-10',
  },
];

const PlotGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-soil-brown mb-2">Research Plots</h2>
          <p className="text-gray-500">Explore active agricultural research plots across Ukraine</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <select className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ukraine-blue">
            <option>All Regions</option>
            <option>Kherson</option>
            <option>Lviv</option>
            <option>Kyiv</option>
            <option>Odesa</option>
          </select>
          <select className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ukraine-blue">
            <option>All Crops</option>
            <option>Sunflower</option>
            <option>Wheat</option>
            <option>Corn</option>
            <option>Soybean</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plots.map((plot) => (
          <Card key={plot.id} className="plot-card">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={plot.imageUrl} 
                alt={plot.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-ukraine-yellow text-ukraine-blue hover:bg-ukraine-yellow/90">
                  {plot.tags[0]}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-soil-brown">{plot.title}</h3>
              <div className="flex items-center mt-2 text-gray-500 text-sm">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>{plot.location}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span>{plot.area}</span>
              </div>
            </CardContent>
            <CardFooter className="px-4 py-3 border-t flex justify-between items-center bg-gray-50">
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="h-3 w-3 mr-1" />
                <span>Updated: {new Date(plot.date).toLocaleDateString()}</span>
              </div>
              <svg className="h-5 w-5 text-soil-brown hover:text-ukraine-blue cursor-pointer" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="inline-flex items-center px-4 py-2 border border-soil-brown text-soil-brown rounded-md hover:bg-soil-brown/5 font-medium text-sm">
          Load More Plots
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PlotGrid;
