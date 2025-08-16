import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import Layout from "@/components/Layout";
import { Camera, Upload, ExternalLink, AlertCircle, CheckCircle, Zap } from 'lucide-react';
import visualLabHero from "@/assets/visual-lab-hero.jpg";

const VisualLab = () => {
  const [checkedTools, setCheckedTools] = useState<string[]>([]);
  const [checkedFlags, setCheckedFlags] = useState<string[]>([]);

  const verificationTools = [
    {
      name: 'Google Lens',
      url: 'https://lens.google.com',
      description: 'Upload your image here and see where else it appears online',
      icon: '🔍',
      instructions: 'Upload image → Analyze → Check source credibility'
    },
    {
      name: 'TinEye Reverse Search',
      url: 'https://tineye.com',
      description: 'Another tool to trace where images come from',
      icon: '👁️',
      instructions: 'Upload image → Review results → Check dates and sources'
    },
    {
      name: 'YouTube DataViewer',
      url: 'https://citizenevidence.amnesty.org/dataviewer',
      description: 'For checking video authenticity',
      icon: '🎥',
      instructions: 'Paste video URL → Extract frames → Reverse search frames'
    }
  ];

  const visualRedFlags = [
    'Blurry/pixelated quality suggesting manipulation',
    'Obvious editing marks or inconsistencies',
    'Non-official website URLs in screenshots',
    'Images appearing on scam alert sites',
    'Poor design or spelling errors in image text',
    'Suspicious watermarks or missing attribution',
    'Images recycled from old, unrelated stories',
    'Inconsistent lighting or shadows',
    'Mismatched image quality within single photo'
  ];

  const investigationChecklist = [
    'Source credibility verified',
    'Cross-referenced with trusted news sites',
    'Government/official sources checked',
    'Image/video reverse searched',
    'Visual quality and authenticity assessed',
    'Domain and URL legitimacy confirmed'
  ];

  const sampleImages = [
    {
      id: 1,
      title: 'Suspicious News Screenshot',
      issues: ['Poor spelling', 'Fake URL'],
      description: 'Screenshot claiming government announcement with spelling errors'
    },
    {
      id: 2,
      title: 'Viral Social Media Post',
      issues: ['No watermark', 'Low quality'],
      description: 'Blurry image claiming to show recent event'
    },
    {
      id: 3,
      title: 'WhatsApp Forward Image',
      issues: ['Old image', 'Wrong context'],
      description: 'Image from 2019 being shared as current news'
    }
  ];

  const toggleTool = (tool: string) => {
    setCheckedTools(prev => 
      prev.includes(tool) 
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    );
  };

  const toggleFlag = (flag: string) => {
    setCheckedFlags(prev => 
      prev.includes(flag) 
        ? prev.filter(f => f !== flag)
        : [...prev, flag]
    );
  };


  const toolsProgress = Math.round((checkedTools.length / verificationTools.length) * 100);
  const flagsProgress = Math.round((checkedFlags.length / visualRedFlags.length) * 100);
  const overallProgress = Math.round(((checkedTools.length + checkedFlags.length) / (verificationTools.length + visualRedFlags.length)) * 100);

  return (
    <Layout title="Visual Investigation Lab" showBackButton>
      {/* Header with Hero Image */}
      <div className="text-center mb-8">
        <div className="relative mb-6 scan-line">
          <img 
            src={visualLabHero} 
            alt="Visual Investigation Lab" 
            className="w-full max-w-2xl mx-auto rounded-lg glow-teal"
          />
        </div>
        <h2 className="text-2xl font-bold text-primary">Image & Video Forensics</h2>
        <p className="text-muted-foreground">Advanced visual verification toolkit for digital detectives</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Image & Video Verification Tools */}
        <Card className="detective-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              Professional Verification Tools
              <span className="ml-auto text-sm text-muted-foreground">
                {checkedTools.length}/{verificationTools.length} completed
              </span>
            </CardTitle>
            <div className="bg-muted/50 rounded-lg p-3 mt-3">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Important:</strong> Use these tools to investigate images/videos, but YOU interpret the results
              </p>
              <p className="text-sm text-muted-foreground">
                These tools show you data - it's your job to decide what it means
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {verificationTools.map((tool) => (
                <Card key={tool.name} className="detective-card">
                  <CardContent className="p-4">
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">{tool.icon}</div>
                      <h3 className="font-semibold text-foreground">{tool.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{tool.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <Button
                        size="sm"
                        className="w-full"
                        onClick={() => window.open(tool.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Launch Tool
                      </Button>
                      
                      <div className="text-xs text-muted-foreground p-2 bg-muted/50 rounded">
                        {tool.instructions}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`tool-${tool.name}`}
                          checked={checkedTools.includes(tool.name)}
                          onCheckedChange={() => toggleTool(tool.name)}
                        />
                        <label htmlFor={`tool-${tool.name}`} className="text-sm cursor-pointer">
                          Used this tool
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Progress value={toolsProgress} className="w-full" />
          </CardContent>
        </Card>

        {/* Interactive Red Flags Training */}
        <Card className="detective-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Red Flags Training
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Can you spot the problem?</strong> Click on issues to learn what to watch for:
            </p>
            
            <div className="space-y-4">
              {sampleImages.map((image) => (
                <Card key={image.id} className="detective-card">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">{image.title}</h4>
                    <p className="text-xs text-muted-foreground mb-3">{image.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {image.issues.map((issue) => (
                        <Button
                          key={issue}
                          size="sm"
                          variant="outline"
                          onClick={() => alert(`Good catch! ${issue} is a red flag because: ${
                            issue === 'Poor spelling' ? 'Professional news sources proofread their content' :
                            issue === 'Fake URL' ? 'Always verify domain names match legitimate news sources' :
                            issue === 'No watermark' ? 'Legitimate media includes proper attribution' :
                            issue === 'Low quality' ? 'Professional sources maintain image quality standards' :
                            issue === 'Old image' ? 'Check reverse image search to verify when photos were taken' :
                            issue === 'Wrong context' ? 'Images are often reused from different events or locations' :
                            'This indicates the content may not be authentic'
                          }`)}
                          className="text-xs"
                        >
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {issue}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Visual Quality Checklist */}
        <Card className="detective-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Visual Quality Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {visualRedFlags.map((flag, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-2 rounded hover:bg-muted/50 transition-colors"
                >
                  <Checkbox
                    id={`vflag-${index}`}
                    checked={checkedFlags.includes(flag)}
                    onCheckedChange={() => toggleFlag(flag)}
                  />
                  <label
                    htmlFor={`vflag-${index}`}
                    className={`text-sm cursor-pointer ${
                      checkedFlags.includes(flag) ? 'text-destructive font-medium' : ''
                    }`}
                  >
                    {flag}
                  </label>
                </div>
              ))}
            </div>
            
            <Progress value={flagsProgress} className="w-full mt-4" />
          </CardContent>
        </Card>

        {/* Your Visual Investigation Checklist */}
        <Card className="detective-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              Your Visual Investigation Checklist
            </CardTitle>
            <div className="bg-muted/50 rounded-lg p-3 mt-3">
              <p className="text-sm text-muted-foreground">
                Check off each step as you complete your visual investigation:
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {[
                'I uploaded the image to reverse search tools',
                'I checked where else this image appears online',
                'I looked for signs of poor quality or editing',
                'I verified the image matches the story context'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <Checkbox
                    id={`checklist-${index}`}
                    checked={checkedFlags.includes(item)}
                    onCheckedChange={() => {
                      setCheckedFlags(prev => 
                        prev.includes(item) 
                          ? prev.filter(f => f !== item)
                          : [...prev, item]
                      );
                    }}
                  />
                  <label
                    htmlFor={`checklist-${index}`}
                    className={`text-sm cursor-pointer ${
                      checkedFlags.includes(item) ? 'text-success font-medium' : ''
                    }`}
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
            
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className="h-3 rounded-full investigation-gradient transition-all duration-500"
                style={{ width: `${Math.round((checkedFlags.filter(f => [
                  'I uploaded the image to reverse search tools',
                  'I checked where else this image appears online',
                  'I looked for signs of poor quality or editing',
                  'I verified the image matches the story context'
                ].includes(f)).length / 4) * 100)}%` }}
              />
            </div>

            <div className="flex gap-4 justify-center">
              <Button variant="outline">
                Save Progress
              </Button>
              <Button 
                className="glow-gold"
                disabled={checkedFlags.filter(f => [
                  'I uploaded the image to reverse search tools',
                  'I checked where else this image appears online',
                  'I looked for signs of poor quality or editing',
                  'I verified the image matches the story context'
                ].includes(f)).length < 3}
                asChild
              >
                <Link to="/case-summary">
                  Next: Make Your Decision
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default VisualLab;