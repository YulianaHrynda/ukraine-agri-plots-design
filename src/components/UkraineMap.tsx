
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Map } from 'lucide-react';

const UkraineMap = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      <Card className="border-none shadow-lg overflow-hidden">
        <CardHeader className="bg-soil-brown text-white p-6">
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center">
              <Map className="mr-2 h-5 w-5" />
              Agricultural Plot Map
            </CardTitle>
            <Tabs defaultValue="plots">
              <TabsList className="bg-soil-light/20">
                <TabsTrigger value="plots" className="data-[state=active]:bg-white data-[state=active]:text-soil-brown">
                  Plots
                </TabsTrigger>
                <TabsTrigger value="yields" className="data-[state=active]:bg-white data-[state=active]:text-soil-brown">
                  Yields
                </TabsTrigger>
                <TabsTrigger value="soil" className="data-[state=active]:bg-white data-[state=active]:text-soil-brown">
                  Soil Types
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <p className="text-sm text-white/80 mt-2">
            Interactive map showing agricultural research plots across Ukraine
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-[16/9] md:aspect-[21/9] bg-gray-100 overflow-hidden relative">
            {/* This would be where a real map would be rendered */}
            <div className="absolute inset-0 flex items-center justify-center bg-ukraine-blue/10 border-y border-ukraine-blue/20">
              <div className="text-center">
                <div className="inline-block p-3 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <Map className="h-8 w-8 text-ukraine-blue" />
                </div>
                <h3 className="text-xl font-medium text-ukraine-blue">Interactive Map</h3>
                <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                  View agricultural research plots, soil data, and crop yields across Ukraine. 
                  In a production environment, this would show an interactive map with data layers.
                </p>
              </div>
            </div>
            
            {/* Map overlay with plot markers - these would be actual interactive elements */}
            <div className="absolute top-1/4 left-1/3 h-4 w-4 bg-ukraine-yellow rounded-full shadow-lg shadow-ukraine-yellow/30 border-2 border-white"></div>
            <div className="absolute top-1/3 right-1/4 h-4 w-4 bg-ukraine-yellow rounded-full shadow-lg shadow-ukraine-yellow/30 border-2 border-white"></div>
            <div className="absolute top-1/2 left-1/4 h-4 w-4 bg-ukraine-yellow rounded-full shadow-lg shadow-ukraine-yellow/30 border-2 border-white"></div>
            <div className="absolute bottom-1/4 right-1/3 h-4 w-4 bg-ukraine-yellow rounded-full shadow-lg shadow-ukraine-yellow/30 border-2 border-white"></div>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
              <h4 className="text-xs font-bold text-soil-brown mb-2">Map Legend</h4>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <div className="h-3 w-3 bg-ukraine-yellow rounded-full"></div>
                <span>Research Plot</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600 mt-1">
                <div className="h-3 w-3 bg-crop-green rounded-full"></div>
                <span>High Yield Area</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UkraineMap;
