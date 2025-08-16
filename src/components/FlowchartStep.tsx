import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from 'lucide-react';

interface FlowchartStepProps {
  title: string;
  icon: LucideIcon;
  subSteps: string[];
  description: string;
  onClick: () => void;
}

const FlowchartStep = ({ 
  title, 
  icon: Icon, 
  subSteps, 
  description,
  onClick 
}: FlowchartStepProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="detective-card relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-full teal-gradient">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {subSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              {step}
            </div>
          ))}
        </div>

        {isHovered && (
          <div className="text-sm text-foreground/80 animate-fade-in">
            {description}
          </div>
        )}

        {/* Animated scan line */}
        <div className="scan-line absolute inset-0 pointer-events-none" />
      </CardContent>
    </Card>
  );
};

export default FlowchartStep;