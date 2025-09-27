import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, Link as LinkIcon, Copy, Eye } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// todo: remove mock functionality
const mockShareLinks = [
  {
    id: "1",
    name: "Mom & Dad",
    url: "https://mediremind.app/share/abc123",
    createdAt: "2024-01-15",
    views: 24,
  },
  {
    id: "2", 
    name: "Dr. Johnson",
    url: "https://mediremind.app/share/def456",
    createdAt: "2024-01-10",
    views: 8,
  },
];

export default function FamilySharing() {
  const [shareLinks, setShareLinks] = useState(mockShareLinks);
  const [newLinkName, setNewLinkName] = useState("");
  const { toast } = useToast();

  const generateShareLink = () => {
    if (!newLinkName.trim()) return;
    
    // todo: remove mock functionality - replace with actual API call
    const newLink = {
      id: Date.now().toString(),
      name: newLinkName,
      url: `https://mediremind.app/share/${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString().split('T')[0],
      views: 0,
    };
    
    setShareLinks(prev => [...prev, newLink]);
    setNewLinkName("");
    
    toast({
      title: "Share Link Created",
      description: `Family members can now access your medication status via the secure link.`,
    });
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Link Copied",
      description: "Share link has been copied to clipboard.",
    });
  };

  return (
    <div className="space-y-8" data-testid="page-family-sharing">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Family Sharing</h1>
        <p className="text-muted-foreground">
          Share your medication status with family members securely
        </p>
      </div>

      {/* Create New Link */}
      <Card data-testid="card-create-share-link">
        <CardHeader>
          <CardTitle className="flex items-center">
            <LinkIcon className="w-5 h-5 mr-2 text-primary" />
            Create Share Link
          </CardTitle>
          <CardDescription>
            Generate a secure link for family members to view your medication adherence
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-3">
            <Input
              placeholder="Enter name (e.g., Mom & Dad, Dr. Smith)"
              value={newLinkName}
              onChange={(e) => setNewLinkName(e.target.value)}
              data-testid="input-share-link-name"
            />
            <Button 
              onClick={generateShareLink}
              disabled={!newLinkName.trim()}
              data-testid="button-generate-link"
            >
              <LinkIcon className="w-4 h-4 mr-2" />
              Generate Link
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Existing Share Links */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Active Share Links</h2>
        {shareLinks.length > 0 ? (
          <div className="space-y-4">
            {shareLinks.map((link) => (
              <Card key={link.id} className="hover-elevate" data-testid={`card-share-link-${link.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold" data-testid={`text-link-name-${link.id}`}>
                          {link.name}
                        </h3>
                        <p className="text-sm text-muted-foreground" data-testid={`text-link-url-${link.id}`}>
                          {link.url}
                        </p>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge variant="secondary" className="text-xs" data-testid={`badge-link-created-${link.id}`}>
                            Created {link.createdAt}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground" data-testid={`text-link-views-${link.id}`}>
                            <Eye className="w-3 h-3 mr-1" />
                            {link.views} views
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(link.url)}
                      data-testid={`button-copy-link-${link.id}`}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No share links created yet
          </div>
        )}
      </div>
    </div>
  );
}