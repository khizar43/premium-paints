import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ArrowRight, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Interior",
      category: "interior",
      location: "Whitefield, Bangalore",
      area: "3500 sq.ft",
      duration: "12 days",
      beforeImage:
        "https://images.unsplash.com/photo-1613844044163-1ad2f2d0b152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBhaW50ZXIlMjBwcm9mZXNzaW9uYWwlMjB3b3JrfGVufDF8fHx8MTc3NDk4NDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage:
        "https://images.unsplash.com/photo-1631510083755-11ecb5172d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYWludGVkJTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3NDk3MjQwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Complete interior painting with premium finishes, including living room, bedrooms, and dining areas.",
    },
    {
      id: 2,
      title: "Modern Apartment Makeover",
      category: "interior",
      location: "Koramangala, Bangalore",
      area: "1800 sq.ft",
      duration: "7 days",
      beforeImage:
        "https://images.unsplash.com/photo-1641259272003-a05fa7fa0f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwY29sb3IlMjBwYWxldHRlfGVufDF8fHx8MTc3NTA0MzEzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage:
        "https://images.unsplash.com/photo-1625578782042-3f2ad4f42956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0OTQzMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "3BHK apartment transformation with contemporary color palette and texture accents.",
    },
    {
      id: 3,
      title: "Residential Exterior Painting",
      category: "exterior",
      location: "Indiranagar, Bangalore",
      area: "4200 sq.ft",
      duration: "10 days",
      beforeImage:
        "https://images.unsplash.com/photo-1613844044163-1ad2f2d0b152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBhaW50ZXIlMjBwcm9mZXNzaW9uYWwlMjB3b3JrfGVufDF8fHx8MTc3NDk4NDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage:
        "https://images.unsplash.com/photo-1594468243943-c031c526dbc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRlcmlvciUyMGhvdXNlJTIwcGFpbnRpbmclMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NzUwNDI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Complete exterior renovation with weather-proof coating and waterproofing treatment.",
    },
    {
      id: 4,
      title: "Corporate Office Space",
      category: "commercial",
      location: "Electronic City, Bangalore",
      area: "8000 sq.ft",
      duration: "15 days",
      beforeImage:
        "https://images.unsplash.com/photo-1641259272003-a05fa7fa0f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwY29sb3IlMjBwYWxldHRlfGVufDF8fHx8MTc3NTA0MzEzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage:
        "https://images.unsplash.com/photo-1632830025328-cce71800b9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBwYWludGVkfGVufDF8fHx8MTc3NTA0MzEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Modern office painting with corporate branding colors and minimal disruption to business operations.",
    },
    {
      id: 5,
      title: "Apartment Complex Exterior",
      category: "exterior",
      location: "HSR Layout, Bangalore",
      area: "25000 sq.ft",
      duration: "30 days",
      beforeImage:
        "https://images.unsplash.com/photo-1613844044163-1ad2f2d0b152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBhaW50ZXIlMjBwcm9mZXNzaW9uYWwlMjB3b3JrfGVufDF8fHx8MTc3NDk4NDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage:
        "https://images.unsplash.com/photo-1774276981680-df2fb510e021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwcGFpbnRlZHxlbnwxfHx8fDE3NzUwNDMxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Large-scale apartment complex painting with comprehensive waterproofing and facade restoration.",
    },
    {
      id: 6,
      title: "Texture Wall Design",
      category: "texture",
      location: "Jayanagar, Bangalore",
      area: "1200 sq.ft",
      duration: "5 days",
      beforeImage:
        "https://images.unsplash.com/photo-1613844044163-1ad2f2d0b152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBhaW50ZXIlMjBwcm9mZXNzaW9uYWwlMjB3b3JrfGVufDF8fHx8MTc3NDk4NDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage:
        "https://images.unsplash.com/photo-1705147219829-6cc7936c14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0dXJlJTIwd2FsbCUyMGRlc2lnbiUyMHBhdHRlcm58ZW58MXx8fHwxNzc1MDQzMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Premium texture painting with royal play finish and decorative patterns for feature walls.",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "interior", name: "Interior" },
    { id: "exterior", name: "Exterior" },
    { id: "commercial", name: "Commercial" },
    { id: "texture", name: "Texture" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our recent projects and see the stunning transformations
            we've delivered across Bangalore
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                className={
                  selectedCategory === category.id
                    ? "bg-primary hover:bg-primary/90"
                    : ""
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">2500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1800+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want Your Project Featured Here?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create something amazing together. Get started with a free
            consultation today.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project: any }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
      <div className="relative group">
        {/* Before/After Images */}
        <div className="relative h-80 overflow-hidden">
          <ImageWithFallback
            src={showAfter ? project.afterImage : project.beforeImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {showAfter ? "After" : "Before"}
          </div>
        </div>

        {/* Slider Control */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/90 rounded-full p-4 shadow-lg">
            <Button
              variant="ghost"
              size="sm"
              onMouseEnter={() => setShowAfter(true)}
              onMouseLeave={() => setShowAfter(false)}
              className="font-semibold"
            >
              {showAfter ? "Show Before" : "Show After"}
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span>{project.location}</span>
        </div>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Area</div>
            <div className="font-semibold">{project.area}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Duration</div>
            <div className="font-semibold">{project.duration}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
