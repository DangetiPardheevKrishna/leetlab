import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Code2,
  Trophy,
  Users,
  BarChart3,
  Zap,
  PlayCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Sparkles,
  BookOpen,
  Brain,
  TrendingUp,
  Shield,
  Cpu,
} from "lucide-react";
import { onboardUser } from "@/modules/auth/actions";

export default async function HomePage() {
  await onboardUser();

  const featuredPlaylists = [
    {
      id: 1,
      title: "Top Interview 150",
      description: "Essential problems for technical interviews",
      difficulty: "medium",
      problems: 150,
      solved: 45,
      color:
        "border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-blue-600/5",
      icon: <Target className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 2,
      title: "Data Structures",
      description: "Master arrays, linked lists, trees, and more",
      difficulty: "mixed",
      problems: 120,
      solved: 32,
      color:
        "border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-purple-600/5",
      icon: <Code2 className="w-6 h-6 text-purple-500" />,
    },
    {
      id: 3,
      title: "Dynamic Programming",
      description: "From basics to advanced DP patterns",
      difficulty: "hard",
      problems: 80,
      solved: 18,
      color:
        "border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-orange-600/5",
      icon: <Brain className="w-6 h-6 text-orange-500" />,
    },
    {
      id: 4,
      title: "Beginner Friendly",
      description: "Start your coding journey here",
      difficulty: "easy",
      problems: 100,
      solved: 60,
      color:
        "border-green-500/20 bg-gradient-to-br from-green-500/5 to-green-600/5",
      icon: <BookOpen className="w-6 h-6 text-green-500" />,
    },
  ];

  const features = [
    {
      title: "Curated Playlists",
      description: "Admin-curated problem collections for systematic learning",
      icon: <PlayCircle className="w-10 h-10" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Real-time Compiler",
      description: "Write, run, and test code instantly in browser",
      icon: <Cpu className="w-10 h-10" />,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Progress Analytics",
      description: "Track performance with detailed insights",
      icon: <BarChart3 className="w-10 h-10" />,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "Community Solutions",
      description: "Learn from multiple approaches and optimizations",
      icon: <Users className="w-10 h-10" />,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  const stats = [
    { label: "Total Problems", value: "450+", icon: <Code2 /> },
    { label: "Active Users", value: "8.5K+", icon: <Users /> },
    { label: "Playlists", value: "25+", icon: <PlayCircle /> },
    { label: "Avg. Solve Rate", value: "68%", icon: <TrendingUp /> },
  ];

  const difficultyData = [
    { level: "Easy", count: 150, color: "bg-green-500", progress: 60 },
    { level: "Medium", count: 200, color: "bg-yellow-500", progress: 40 },
    { level: "Hard", count: 100, color: "bg-red-500", progress: 20 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4 md:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <Badge
              variant="outline"
              className="px-4 py-2 border-primary/20 bg-primary/5"
            >
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              <span className="text-primary font-semibold">
                LeetCode Clone Platform
              </span>
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Master Coding
              </span>
              <br />
              <span className="text-foreground">
                Through Structured Practice
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solve curated problem playlists created by admins, track your
              progress with analytics, and ace technical interviews with our
              comprehensive coding platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="px-8 h-12 text-base" asChild>
                <Link href="/problems">
                  Start Practicing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 h-12 text-base"
                asChild
              >
                <Link href="/playlists">
                  <PlayCircle className="mr-2 w-5 h-5" />
                  Browse Playlists
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-border/40 hover:border-primary/30 transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Why Choose CodeMaster?</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to master coding interviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/40 hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className={`p-3 rounded-lg ${feature.bg} w-fit mb-4`}>
                    <div className={feature.color}>{feature.icon}</div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Playlists</h2>
              <p className="text-muted-foreground">
                Curated by admins for focused learning
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/playlists">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredPlaylists.map((playlist) => (
              <Card
                key={playlist.id}
                className={`border-2 ${playlist.color} hover:shadow-xl transition-all`}
              >
                <CardHeader className="flex flex-row items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{playlist.title}</CardTitle>
                    <CardDescription>{playlist.description}</CardDescription>
                  </div>
                  {playlist.icon}
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold">
                        {playlist.solved}/{playlist.problems} solved
                      </span>
                    </div>
                    <Progress
                      value={(playlist.solved / playlist.problems) * 100}
                    />
                    <div className="flex items-center gap-4">
                      <Badge
                        variant={
                          playlist.difficulty === "easy"
                            ? "default"
                            : playlist.difficulty === "medium"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {playlist.difficulty.charAt(0).toUpperCase() +
                          playlist.difficulty.slice(1)}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {playlist.problems} problems
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/playlists/${playlist.id}`}>
                      Start Solving
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty Distribution */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <Card>
            <CardHeader>
              <CardTitle>Problem Difficulty Distribution</CardTitle>
              <CardDescription>
                450+ problems across all difficulty levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {difficultyData.map((item) => (
                  <div key={item.level} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{item.level}</span>
                      <span className="text-muted-foreground">
                        {item.count} problems
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all duration-500`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Admin Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Admin Features</CardTitle>
              <CardDescription>
                Curate and manage problem playlists for the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-lg">Create Playlists</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Group problems into themed playlists for structured
                      learning paths
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-lg">Add Problems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Add new coding problems with test cases and solutions
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-lg">Manage Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Edit, update, and moderate problems and playlists
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                variant="outline"
                className="border-primary text-primary"
                asChild
              >
                <Link href="/admin/dashboard">
                  <Shield className="mr-2 w-4 h-4" />
                  Admin Dashboard
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="border-border/40 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-3xl">
                Ready to Master Coding?
              </CardTitle>
              <CardDescription className="text-lg">
                Join thousands of developers improving their skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8" asChild>
                  <Link href="/signup">
                    Get Started Free
                    <Zap className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/problems">
                    Browse Problems
                    <Code2 className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
