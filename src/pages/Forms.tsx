import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Plus,
  Eye,
  Share2,
  BarChart3,
  Edit,
  Trash2,
  Copy,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const Forms = () => {
  // Mock data - will be replaced with real data later
  const forms = [
    {
      id: 1,
      title: "Customer Satisfaction Survey",
      description: "Collect feedback about our service quality and customer experience",
      responses: 156,
      status: "Active",
      createdAt: "2024-01-15",
      lastResponse: "2 hours ago",
      publicUrl: "feedback.pro/f/cust-sat-survey-xyz"
    },
    {
      id: 2,
      title: "Product Feedback Form",
      description: "Gather insights about our latest product features and improvements",
      responses: 89,
      status: "Active", 
      createdAt: "2024-01-10",
      lastResponse: "5 hours ago",
      publicUrl: "feedback.pro/f/product-feedback-abc"
    },
    {
      id: 3,
      title: "Employee Engagement Survey",
      description: "Internal survey to measure employee satisfaction and engagement levels",
      responses: 234,
      status: "Draft",
      createdAt: "2024-01-08",
      lastResponse: "Never",
      publicUrl: "feedback.pro/f/employee-survey-def"
    },
    {
      id: 4,
      title: "Event Feedback Collection",
      description: "Post-event survey to collect attendee feedback and suggestions",
      responses: 67,
      status: "Closed",
      createdAt: "2024-01-05",
      lastResponse: "3 days ago",
      publicUrl: "feedback.pro/f/event-feedback-ghi"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "default";
      case "Draft":
        return "secondary";
      case "Closed":
        return "outline";
      default:
        return "secondary";
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(`https://${text}`);
    // Would show toast notification here
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My Forms</h1>
            <p className="text-muted-foreground">
              Manage all your feedback forms and view their performance
            </p>
          </div>
          <Button asChild className="mt-4 sm:mt-0">
            <Link to="/create-form">
              <Plus className="w-4 h-4 mr-2" />
              Create New Form
            </Link>
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search forms..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline">All Status</Button>
                <Button variant="outline">Filter</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Forms List */}
        <div className="space-y-4">
          {forms.map((form) => (
            <Card key={form.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  {/* Form Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {form.title}
                      </h3>
                      <Badge variant={getStatusColor(form.status)}>
                        {form.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {form.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span>{form.responses} responses</span>
                      <span>Created {form.createdAt}</span>
                      <span>Last response: {form.lastResponse}</span>
                    </div>
                    
                    {/* Public URL */}
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-muted-foreground">Public URL:</span>
                      <code className="bg-muted px-2 py-1 rounded text-xs">
                        {form.publicUrl}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(form.publicUrl)}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <BarChart3 className="w-4 h-4 mr-1" />
                      Analytics
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {forms.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <Plus className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No forms created yet
              </h3>
              <p className="text-muted-foreground mb-6">
                Get started by creating your first feedback form
              </p>
              <Button asChild>
                <Link to="/create-form">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Form
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Forms;