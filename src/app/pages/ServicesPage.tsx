import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Home,
  Building2,
  Sparkles,
  Paintbrush,
  Palette,
  Droplet,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Interior Painting",
      description:
        "Transform your indoor spaces with our premium interior painting services. We specialize in residential and commercial interiors.",
      image:
        "https://images.unsplash.com/photo-1631510083755-11ecb5172d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYWludGVkJTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3NDk3MjQwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Living rooms & bedrooms",
        "Kitchen & bathroom painting",
        "Ceiling & woodwork",
        "Color consultation included",
        "Furniture protection",
        "Zero-dust technology",
      ],
      price: "Starting from ₹12/sq.ft",
    },
    {
      icon: Building2,
      title: "Exterior Painting",
      description:
        "Protect and beautify your property's exterior with weather-resistant paints designed for Bangalore's climate.",
      image:
        "https://images.unsplash.com/photo-1594468243943-c031c526dbc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRlcmlvciUyMGhvdXNlJTIwcGFpbnRpbmclMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NzUwNDI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Weather-proof coating",
        "Crack filling & repair",
        "Anti-algae treatment",
        "Waterproofing solutions",
        "Balcony & terrace painting",
        "5-year warranty",
      ],
      price: "Starting from ₹15/sq.ft",
    },
    {
      icon: Sparkles,
      title: "Texture & Design",
      description:
        "Add depth and character to your walls with our artistic texture painting and designer finishes.",
      image:
        "https://images.unsplash.com/photo-1705147219829-6cc7936c14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0dXJlJTIwd2FsbCUyMGRlc2lnbiUyMHBhdHRlcm58ZW58MXx8fHwxNzc1MDQzMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Royal play texture",
        "3D wall designs",
        "Metallic finishes",
        "Stencil designs",
        "Decorative patterns",
        "Custom artwork",
      ],
      price: "Starting from ₹35/sq.ft",
    },
    {
      icon: Paintbrush,
      title: "Commercial Painting",
      description:
        "Professional painting services for offices, tech parks, retail spaces, and commercial establishments.",
      image:
        "https://images.unsplash.com/photo-1632830025328-cce71800b9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBwYWludGVkfGVufDF8fHx8MTc3NTA0MzEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Minimal business disruption",
        "After-hours scheduling",
        "Fast project completion",
        "Corporate color schemes",
        "Safety compliance",
        "Maintenance contracts",
      ],
      price: "Custom quote based on project",
    },
    {
      icon: Palette,
      title: "Wood Polishing & Painting",
      description:
        "Restore and refinish wooden surfaces including doors, windows, furniture, and cabinets.",
      image:
        "https://images.unsplash.com/photo-1774417453133-1809294df9cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGtpdGNoZW4lMjBpbnRlcmlvciUyMHdoaXRlfGVufDF8fHx8MTc3NTA0MzEzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Melamine polishing",
        "PU polishing",
        "Door & window painting",
        "Furniture refinishing",
        "Cabinet makeover",
        "Wood protection coating",
      ],
      price: "Starting from ₹25/sq.ft",
    },
    {
      icon: Droplet,
      title: "Waterproofing Solutions",
      description:
        "Comprehensive waterproofing services to protect your property from moisture damage and seepage.",
      image:
        "https://images.unsplash.com/photo-1774276981680-df2fb510e021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwcGFpbnRlZHxlbnwxfHx8fDE3NzUwNDMxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Terrace waterproofing",
        "Bathroom seepage treatment",
        "Basement waterproofing",
        "Leak detection & repair",
        "Damp proofing",
        "10-year warranty",
      ],
      price: "Starting from ₹45/sq.ft",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Free Consultation",
      description:
        "Schedule a free site visit. Our expert will assess your requirements and provide professional recommendations.",
    },
    {
      step: "02",
      title: "Detailed Quote",
      description:
        "Receive a transparent, itemized quote with no hidden charges. We explain every aspect of the project.",
    },
    {
      step: "03",
      title: "Color Selection",
      description:
        "Get expert color consultation. We provide sample testing to ensure you're 100% satisfied with your choice.",
    },
    {
      step: "04",
      title: "Surface Preparation",
      description:
        "Professional surface preparation including cleaning, sanding, crack filling, and primer application.",
    },
    {
      step: "05",
      title: "Quality Painting",
      description:
        "Skilled painters apply multiple coats using premium materials. We protect your furniture and ensure cleanliness.",
    },
    {
      step: "06",
      title: "Final Inspection",
      description:
        "Thorough quality check and final walkthrough with you. We ensure complete satisfaction before handover.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Premium Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive painting solutions for every need. From residential
            interiors to commercial projects, we deliver excellence every time.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`grid md:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  <div
                    className={`relative h-64 md:h-auto ${
                      index % 2 === 1 ? "md:col-start-2" : ""
                    }`}
                  >
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 w-16 h-16 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl mb-4">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-lg">
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-6 border-t">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            Pricing
                          </div>
                          <div className="text-xl font-semibold text-primary">
                            {service.price}
                          </div>
                        </div>
                        <Link to="/contact">
                          <Button className="bg-accent hover:bg-accent/90">
                            Get Quote
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Working Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to ensure perfect results every time
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-accent/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today for a free consultation and detailed quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
