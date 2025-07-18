import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Download,
  TrendingUp,
  Users,
  MessageSquare,
  Calendar,
  BarChart3
} from "lucide-react";

const Analytics = () => {
  // Mock data for analytics
  const overviewStats = [
    {
      title: "Total Responses",
      value: "1,847",
      change: "+12%",
      changeType: "positive",
      icon: Users
    },
    {
      title: "Avg. Response Rate",
      value: "68%",
      change: "+5%",
      changeType: "positive", 
      icon: TrendingUp
    },
    {
      title: "Active Forms",
      value: "8",
      change: "+2",
      changeType: "positive",
      icon: MessageSquare
    },
    {
      title: "This Month",
      value: "234",
      change: "-8%",
      changeType: "negative",
      icon: Calendar
    }
  ];

  const topForms = [
    {
      name: "Customer Satisfaction Survey",
      responses: 456,
      responseRate: "78%",
      avgRating: 4.2
    },
    {
      name: "Product Feedback Form", 
      responses: 289,
      responseRate: "65%",
      avgRating: 3.8
    },
    {
      name: "Employee Engagement Survey",
      responses: 234,
      responseRate: "89%",
      avgRating: 4.5
    },
    {
      name: "Event Feedback Collection",
      responses: 167,
      responseRate: "72%",
      avgRating: 4.1
    }
  ];

  const recentResponses = [
    {
      form: "Customer Satisfaction Survey",
      response: "Great service, very satisfied with the support team!",
      rating: 5,
      time: "2 hours ago"
    },
    {
      form: "Product Feedback Form",
      response: "The new features are helpful but could use better documentation.",
      rating: 4,
      time: "4 hours ago"
    },
    {
      form: "Employee Engagement Survey",
      response: "Really enjoying the flexible work arrangements.",
      rating: 5,
      time: "6 hours ago"
    },
    {
      form: "Event Feedback Collection",
      response: "Well organized event, learned a lot from the speakers.",
      rating: 4,
      time: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
            <p className="text-muted-foreground">
              Track performance and insights from your feedback forms
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Select defaultValue="30days">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="1year">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${
                    stat.changeType === "positive" ? "text-success" : "text-destructive"
                  }`}>
                    {stat.change} from last period
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Performing Forms */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Forms</CardTitle>
              <CardDescription>
                Forms with the highest response rates and engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topForms.map((form, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{form.name}</h4>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                        <span>{form.responses} responses</span>
                        <span>{form.responseRate} rate</span>
                        <span>★ {form.avgRating}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Response Trends Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Response Trends</CardTitle>
              <CardDescription>
                Daily response volume over the selected period
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Chart visualization will be implemented</p>
                  <p className="text-xs">with charting library integration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Responses */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Responses</CardTitle>
            <CardDescription>
              Latest feedback submissions across all forms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentResponses.map((response, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {response.form}
                      </Badge>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < response.rating ? "text-warning" : "text-muted"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{response.time}</span>
                  </div>
                  <p className="text-sm text-foreground">{response.response}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;