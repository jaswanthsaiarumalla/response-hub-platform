import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  PlusCircle, 
  FileText, 
  Users, 
  TrendingUp,
  Eye,
  Share2,
  MoreHorizontal
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data - will be replaced with real data later
  const stats = [
    {
      title: "Total Forms",
      value: "12",
      description: "3 created this month",
      icon: FileText,
      color: "text-primary"
    },
    {
      title: "Total Responses",
      value: "1,247",
      description: "+45 this week",
      icon: Users,
      color: "text-success"
    },
    {
      title: "Response Rate",
      value: "68%",
      description: "+5% from last month",
      icon: TrendingUp,
      color: "text-warning"
    }
  ];

  const recentForms = [
    {
      id: 1,
      title: "Customer Satisfaction Survey",
      responses: 156,
      status: "Active",
      createdAt: "2 days ago",
      lastResponse: "5 hours ago"
    },
    {
      id: 2,
      title: "Product Feedback Form",
      responses: 89,
      status: "Active",
      createdAt: "1 week ago",
      lastResponse: "2 hours ago"
    },
    {
      id: 3,
      title: "Employee Engagement Survey",
      responses: 234,
      status: "Draft",
      createdAt: "3 days ago",
      lastResponse: "Never"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome back to FeedbackPro</h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Create, share, and analyze feedback forms with ease
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/create-form">
                <PlusCircle className="w-5 h-5 mr-2" />
                Create Your First Form
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Forms */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Forms</CardTitle>
                <CardDescription>
                  Manage your feedback forms and view responses
                </CardDescription>
              </div>
              <Button asChild>
                <Link to="/forms">View All Forms</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentForms.map((form) => (
                <div key={form.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-foreground">{form.title}</h3>
                      <Badge variant={form.status === "Active" ? "default" : "secondary"}>
                        {form.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{form.responses} responses</span>
                      <span>Created {form.createdAt}</span>
                      <span>Last response: {form.lastResponse}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;