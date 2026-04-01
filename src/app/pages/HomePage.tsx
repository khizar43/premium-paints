import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Paintbrush,
  Home,
  Building2,
  Sparkles,
  Shield,
  Clock,
  Award,
  CheckCircle2,
  ArrowRight,
  Star,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MobileCarousel } from "../components/MobileCarousel";

export function HomePage() {
  const services = [
    {
      icon: Home,
      title: "Interior Painting",
      description:
        "Transform your living spaces with premium interior painting services. Expert color consultation and flawless finish.",
    },
    {
      icon: Building2,
      title: "Exterior Painting",
      description:
        "Weather-resistant exterior painting that protects and beautifies your property for years to come.",
    },
    {
      icon: Sparkles,
      title: "Texture & Design",
      description:
        "Create stunning wall textures and decorative finishes that add character to any space.",
    },
    {
      icon: Paintbrush,
      title: "Commercial Painting",
      description:
        "Professional painting solutions for offices, tech parks, and commercial establishments.",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "5-Year Warranty",
      description: "All our work comes with comprehensive warranty coverage",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect your schedule and complete projects on time",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Certified painters with 10+ years of experience",
    },
    {
      icon: CheckCircle2,
      title: "Quality Materials",
      description: "Premium paints from Asian Paints, Berger, and Dulux",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner, Indiranagar",
      image: "https://images.unsplash.com/photo-1730130596425-197566414dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMEluZGlhbiUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzc1MDQzMTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Premium Paints transformed our entire apartment. The attention to detail and professionalism was outstanding. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Apartment Owner, Koramangala",
      image: "https://images.unsplash.com/photo-1625578782042-3f2ad4f42956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0OTQzMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Best painting service in Bangalore! They completed our 3BHK in just 5 days with zero hassle. The finish is flawless.",
      rating: 5,
    },
    {
      name: "Suresh Reddy",
      role: "Commercial Client, Whitefield",
      image: "https://images.unsplash.com/photo-1632830025328-cce71800b9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBwYWludGVkfGVufDF8fHx8MTc3NTA0MzEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "We hired them for our office renovation. Professional team, competitive pricing, and excellent results. Will definitely use again.",
      rating: 5,
    },
  ];

  const portfolioProjects = [
    {
      image:
        "https://images.unsplash.com/photo-1625578782042-3f2ad4f42956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0OTQzMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Luxury Bedroom",
      location: "Indiranagar",
    },
    {
      image:
        "https://images.unsplash.com/photo-1774417453133-1809294df9cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGtpdGNoZW4lMjBpbnRlcmlvciUyMHdoaXRlfGVufDF8fHx8MTc3NTA0MzEzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Modern Kitchen",
      location: "Koramangala",
    },
    {
      image:
        "https://images.unsplash.com/photo-1632830025328-cce71800b9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBwYWludGVkfGVufDF8fHx8MTc3NTA0MzEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Office Space",
      location: "Whitefield",
    },
  ];

  const stats = [
    { number: "2500+", label: "Projects Completed" },
    { number: "1800+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Expert Painters" },
  ];

  // Carousel items for portfolio
  const carouselItems = portfolioProjects.map((project, index) => ({
    id: index,
    content: (
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-72 sm:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="text-white/80">{project.location}</p>
        </div>
      </div>
    ),
  }));

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="relative z-10 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Transform Your Space with{" "}
                <span className="text-accent">Premium Painting</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90">
                Bangalore's most trusted painting contractors. Quality work,
                on-time delivery, and 5-year warranty guaranteed.
              </p>
              
              {/* Mobile-Optimized CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg active:scale-95 transition-transform"
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a
                  href="tel:+918012345678"
                  className="w-full sm:w-auto lg:hidden"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg active:scale-95 transition-transform"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                  </Button>
                </a>
                <a
                  href="https://wa.me/918012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto hidden lg:block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg active:scale-95 transition-transform"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>

            {/* Hero Image - Hidden on small mobile, shown on larger screens */}
            <div className="relative hidden sm:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631510083755-11ecb5172d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYWludGVkJTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3NDk3MjQwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Beautiful painted living room"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="bg-white py-8 sm:py-12 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Stacked */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our Premium Services
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive painting solutions for homes, apartments, and
              commercial spaces across Bangalore
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 border-none"
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 active:scale-95 transition-transform w-full sm:w-auto">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Why Choose Premium Paints?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              We're not just painters, we're your partners in creating beautiful
              spaces
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Mobile Carousel */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-secondary/50 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our Recent Work
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              See the transformation we've delivered for our clients
            </p>
          </div>
          
          {/* Mobile: Swipeable Carousel */}
          <div className="lg:hidden">
            <MobileCarousel items={carouselItems} autoplay={true} />
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/80">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary active:scale-95 transition-transform w-full sm:w-auto">
                View Full Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 px-4">
            Get a free, no-obligation quote today. Our experts are ready to help
            bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg active:scale-95 transition-transform"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+919066330362" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg active:scale-95 transition-transform"
              >
                Call Now: 9066330262
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}