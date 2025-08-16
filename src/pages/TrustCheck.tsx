import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { Search, ExternalLink, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import detectiveBadge from "@/assets/detective-badge.jpg";

const TrustCheck = () => {
  const [searchKeywords, setSearchKeywords] = useState('');
  const [evidenceNotes, setEvidenceNotes] = useState('');
  const [checkedFlags, setCheckedFlags] = useState<string[]>([]);
  const [checkedEvidence, setCheckedEvidence] = useState<string[]>([]);

  const searchTemplates = [
    'fact check',
    'PIB fact check',
    'hoax debunked',
    'verify claim',
    'truth or fake'
  ];

  const trustedSources = [
    { name: 'PIB Fact Check', url: 'https://pib.gov.in/factcheck', icon: '🏛️' },
    { name: 'AltNews.in', url: 'https://altnews.in', icon: '📰' },
    { name: 'BoomLive', url: 'https://boomlive.in', icon: '💥' },
    { name: 'Snopes', url: 'https://snopes.com', icon: '🔍' },
    { name: 'The Hindu', url: 'https://thehindu.com', icon: '📄' },
    { name: 'Indian Express', url: 'https://indianexpress.com', icon: '📝' }
  ];

  const redFlags = [
    'Only shady websites or no-name blogs report it',
    'No official statement from PIB, Ministry of Health, or PMO',
    'Not covered widely in major news outlets',
    'Suspicious website domains (.xyz, .fun, .covid-relief.in)',
    'Poor grammar, spelling errors, or unprofessional formatting',
    'Overly emotional or clickbait language',
    'Missing author information or contact details',
    'Claims seem too good/bad to be true',
    'Uses phrases like "doctors hate this" or "they don\'t want you to know"'
  ];

  const evidenceChecklist = [
    'Found on trusted news sites (list which ones)',
    'Confirmed by government sources',
    'Cross-referenced with fact-check sites',
    'No red flags detected in sources',
    'Ready to document findings'
  ];

  const handleSearch = (template: string) => {
    const query = `${searchKeywords} ${template}`;
    window.open(`https://google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const toggleFlag = (flag: string) => {
    setCheckedFlags(prev => 
      prev.includes(flag) 
        ? prev.filter(f => f !== flag)
        : [...prev, flag]
    );
  };

  const toggleEvidence = (evidence: string) => {
    setCheckedEvidence(prev => 
      prev.includes(evidence) 
        ? prev.filter(e => e !== evidence)
        : [...prev, evidence]
    );
  };

  const completionPercentage = Math.round((checkedEvidence.length / evidenceChecklist.length) * 100);

  return (
    <Layout title="Trust Check Toolkit" showBackButton>
      {/* Header with Badge */}
      <div className="text-center mb-8">
        <div className="inline-block mb-4 badge-spin">
          <img 
            src={detectiveBadge} 
            alt="Detective Badge" 
            className="w-24 h-24 rounded-full glow-gold"
          />
        </div>
        <h2 className="text-2xl font-bold text-primary">Source Verification Specialist</h2>
        <p className="text-muted-foreground">Investigate claims with professional fact-checking tools</p>
      </div>

      {/* How to Do a Trust Check */}
      <Card className="detective-card mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-success" />
            🛡️ How to Do a Trust Check
          </CardTitle>
          <p className="text-muted-foreground italic">Is the source reliable? Can I find this news on other trusted platforms?</p>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold mb-3">Step-by-Step Guide:</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-medium">What to Check</th>
                    <th className="text-left p-2 font-medium">How to Do It</th>
                    <th className="text-left p-2 font-medium">What It Means</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="p-2 font-medium">Original Source</td>
                    <td className="p-2">Where did you first see this? WhatsApp? Social media? Random blog?</td>
                    <td className="p-2">If it's only on forwarded messages or unknown sites - be suspicious</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Cross-Reference</td>
                    <td className="p-2">Search: [keywords] fact check and [keywords] PIB fact check</td>
                    <td className="p-2">Real news appears on multiple trusted sites</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Official Sources</td>
                    <td className="p-2">Look for coverage on NDTV, The Hindu, PIB.gov.in</td>
                    <td className="p-2">Government news should have official statements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-destructive/10 rounded-lg p-4">
              <h4 className="font-semibold text-destructive mb-2">🚩 Red Flags to Watch For:</h4>
              <ul className="text-sm space-y-1">
                <li>• Only small blogs or no-name websites talk about it</li>
                <li>• No official statement from PIB, Ministry of Health, or PMO</li>
                <li>• Not covered widely in major news outlets</li>
                <li>• Suspicious domains (.xyz, .fun, .covid-relief.in)</li>
                <li>• Poor grammar, spelling errors, or unprofessional formatting</li>
              </ul>
            </div>
            
            <div className="bg-success/10 rounded-lg p-4">
              <h4 className="font-semibold text-success mb-2">✅ The Trust Check Logic:</h4>
              <p className="text-sm mb-2">If a story were real, it would:</p>
              <ul className="text-sm space-y-1">
                <li>• Be covered widely in major news</li>
                <li>• Be hosted on official .gov.in websites</li>
                <li>• Have press releases and government announcements</li>
                <li>• If you don't find these - it's likely fake</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Smart Search Generator */}
        <Card className="detective-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Smart Search Generator
            </CardTitle>
            <div className="bg-muted/50 rounded-lg p-3 mt-3">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Important:</strong> Use these templates to search, but YOU need to analyze what you find
              </p>
              <p className="text-sm text-muted-foreground">
                These searches help you find information - it's YOUR job to evaluate if sources are trustworthy
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Enter headline keywords..."
              value={searchKeywords}
              onChange={(e) => setSearchKeywords(e.target.value)}
              className="text-lg"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {searchTemplates.map((template) => (
                <Button
                  key={template}
                  variant="outline"
                  onClick={() => handleSearch(template)}
                  disabled={!searchKeywords}
                  className="justify-start"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  "{searchKeywords} {template}"
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trusted Sources Grid */}
        <Card className="detective-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success" />
              Trusted Sources Directory
            </CardTitle>
            <div className="bg-muted/50 rounded-lg p-3 mt-3">
              <p className="text-sm text-muted-foreground mb-2">
                These are reliable sources to check - look for coverage of your story on these sites
              </p>
              <p className="text-sm text-muted-foreground">
                Finding it on these sites means it's likely true. NOT finding it doesn't mean it's false - keep investigating!
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {trustedSources.map((source) => (
                <Button
                  key={source.name}
                  variant="outline"
                  className="h-auto p-3 justify-start"
                  onClick={() => window.open(source.url, '_blank')}
                >
                  <span className="text-lg mr-2">{source.icon}</span>
                  <span className="text-sm">{source.name}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Red Flags Detector */}
        <Card className="detective-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Red Flags Detector
            </CardTitle>
            <div className="bg-muted/50 rounded-lg p-3 mt-3">
              <p className="text-sm text-muted-foreground">
                Look for these warning signs in the sources you find. Check off any that apply to your investigation.
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {redFlags.map((flag, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Checkbox
                    id={`flag-${index}`}
                    checked={checkedFlags.includes(flag)}
                    onCheckedChange={() => toggleFlag(flag)}
                  />
                  <label
                    htmlFor={`flag-${index}`}
                    className={`text-sm cursor-pointer ${
                      checkedFlags.includes(flag) ? 'text-destructive font-medium' : ''
                    }`}
                  >
                    {flag}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Investigation Notes */}
        <Card className="detective-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                Your Investigation Notes
              </span>
              <span className="text-sm text-muted-foreground">
                Progress: {completionPercentage}%
              </span>
            </CardTitle>
            <div className="bg-muted/50 rounded-lg p-3 mt-3">
              <p className="text-sm text-muted-foreground">
                <strong>Write down what you found when searching:</strong> Which sites covered it? Which didn't? Any red flags you spotted?
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Evidence Checklist */}
            <div className="space-y-3">
              {evidenceChecklist.map((evidence, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Checkbox
                    id={`evidence-${index}`}
                    checked={checkedEvidence.includes(evidence)}
                    onCheckedChange={() => toggleEvidence(evidence)}
                  />
                  <label
                    htmlFor={`evidence-${index}`}
                    className={`text-sm cursor-pointer ${
                      checkedEvidence.includes(evidence) ? 'text-success font-medium' : ''
                    }`}
                  >
                    {evidence}
                  </label>
                </div>
              ))}
            </div>

            {/* Notes Area */}
            <div>
              <label className="text-sm font-medium mb-2 block">Investigation Notes:</label>
              <Textarea
                placeholder="Document your findings, sources checked, and any suspicious elements discovered..."
                value={evidenceNotes}
                onChange={(e) => setEvidenceNotes(e.target.value)}
                className="min-h-32"
              />
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="h-2 rounded-full teal-gradient transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={() => {
                  setCheckedEvidence([]);
                  setCheckedFlags([]);
                  setEvidenceNotes('');
                  setSearchKeywords('');
                }}
              >
                Reset Investigation
              </Button>
              <Button 
                className="glow-gold"
                disabled={completionPercentage < 80}
                asChild
              >
                <Link to="/visual-lab">
                  Next: Visual Check
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TrustCheck;