import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FlowchartStep from "@/components/FlowchartStep";
import { Search, Eye, FileCheck, ArrowRight, Play } from 'lucide-react';
import detectiveHero from "@/assets/detective-hero.jpg";

const Index = () => {
  const [casesSolved, setCasesSolved] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setCasesSolved(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const flowchartSteps = [
    {
      title: "Trust Check",
      icon: Search,
      subSteps: ["Check Source", "Cross-Reference", "Spot Red Flags"],
      description: "Verify the credibility of sources and identify potential misinformation indicators.",
      path: "/trust-check"
    },
    {
      title: "Visual Verify",
      icon: Eye,
      subSteps: ["Reverse Image Search", "Check Quality", "Verify Context"],
      description: "Use advanced tools to authenticate images and videos for manipulation.",
      path: "/visual-lab"
    }
  ];

  const quickAccessFeatures = [
    { name: "Trusted Sources", icon: "🛡️", description: "Access verified fact-checking sites", path: "/trust-check" },
    { name: "Red Flag Detector", icon: "🚩", description: "Identify suspicious content markers", path: "/trust-check" },
    { name: "Image Verification", icon: "🔍", description: "Reverse search and analysis tools", path: "/visual-lab" },
    { name: "Evidence Collector", icon: "📝", description: "Document your findings", path: "/case-summary" }
  ];

  return (
    <div className="min-h-screen detective-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={detectiveHero} 
            alt="Detective Command Center" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-primary glow-gold">🕵️‍♀️</span>
              <br />
              <span className="investigation-gradient bg-clip-text text-transparent">
                Fact-Check Detective Toolkit
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your digital investigation command center for uncovering the truth. 
              Master the art of fact-checking with professional detective tools.
            </p>

            <div className="text-sm text-muted-foreground">
              Cases solved today: 
              <span className="text-primary font-bold ml-2 text-lg">
                {casesSolved.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Investigation Flowchart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Professional Investigation Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Follow this simple 2-step method to verify any news story
            </p>
            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto mb-8">
              <p className="text-foreground mb-4 font-medium">How it works:</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span className="text-muted-foreground"><strong>Trust Check:</strong> You investigate the source credibility using our smart search tools and trusted source directory</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span className="text-muted-foreground"><strong>Visual Verify:</strong> You analyze any images or videos using professional forensic tools to detect manipulation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {flowchartSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <FlowchartStep
                  title={step.title}
                  icon={step.icon}
                  subSteps={step.subSteps}
                  description={step.description}
                  onClick={() => window.location.href = step.path}
                />
                
                {index < flowchartSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary glow-gold" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Hub */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            Quick Access Toolkit
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickAccessFeatures.map((feature, index) => (
              <Link key={feature.name} to={feature.path}>
                <Card className="detective-card text-center hover:glow-gold transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto detective-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to become a Fact-Check Detective?
              </h2>
              <p className="text-muted-foreground mb-6">
                Your investigation toolkit - everything you need to verify news stories
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="outline" asChild>
                  <Link to="/trust-check">
                    Begin Your First Case
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Main Call to Action - Start Investigation at the very bottom */}
          <div className="text-center pt-8">
            <Button size="lg" className="pulse-gold text-lg px-8 py-6" asChild>
              <Link to="/trust-check">
                <Play className="mr-2 h-5 w-5" />
                Start Investigation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;