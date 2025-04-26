
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trendValue?: string;
  trendUp?: boolean;
}

const StatCard = ({ title, value, description, icon, trendValue, trendUp }: StatCardProps) => {
  return (
    <Card className="stat-card">
      <CardHeader className="p-4 pb-0 flex justify-between items-start">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        <div className="rounded-md bg-gray-50 p-1.5 text-soil-brown">{icon}</div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="text-2xl font-bold text-soil-brown">{value}</div>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
        {trendValue && (
          <div className="flex items-center mt-2">
            <span className={`text-xs font-medium ${trendUp ? 'text-crop-green' : 'text-red-500'}`}>
              {trendValue}
            </span>
            <svg
              className={`h-3 w-3 ml-1 ${trendUp ? 'text-crop-green' : 'text-red-500'}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {trendUp ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              )}
            </svg>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
