import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle2, ArrowRight, Info } from "lucide-react";

export function PricingPage() {
  const pricingPlans = [
    {
      name: "Basic Plan",
      description: "Perfect for simple repainting projects",
      price: "₹12",
      unit: "per sq.ft",
      popular: false,
      features: [
        "1 coat of primer",
        "2 coats of paint",
        "Basic color consultation",
        "Standard paint brands",
        "Furniture covering",
        "Basic cleaning",
        "3-year warranty",
      ],
      ideal: "Ideal for: Rental properties, Simple refreshes",
    },
    {
      name: "Premium Plan",
      description: "Most popular choice for homeowners",
      price: "₹18",
      unit: "per sq.ft",
      popular: true,
      features: [
        "1 coat of primer",
        "3 coats of premium paint",
        "Expert color consultation",
        "Premium brands (Asian Paints, Berger)",
        "Complete furniture protection",
        "Thorough cleaning",
        "5-year warranty",
        "Free touch-up within 1 year",
      ],
      ideal: "Ideal for: Homes, Apartments, Residential projects",
    },
    {
      name: "Luxury Plan",
      description: "Ultimate finish with designer touches",
      price: "₹28",
      unit: "per sq.ft",
      popular: false,
      features: [
        "Premium primer",
        "4 coats of luxury paint",
        "Professional designer consultation",
        "Luxury brands (Dulux, Nippon)",
        "Complete protection & care",
        "Deep cleaning & polishing",
        "7-year warranty",
        "Free touch-up within 2 years",
        "Texture options available",
        "Decorative finishes",
      ],
      ideal: "Ideal for: Luxury homes, Villas, High-end properties",
    },
  ];

  const additionalServices = [
    {
      service: "Exterior Painting",
      price: "₹15-22/sq.ft",
      description: "Weather-resistant coating with waterproofing",
    },
    {
      service: "Texture Painting",
      price: "₹35-60/sq.ft",
      description: "Royal play, 3D designs, metallic finishes",
    },
    {
      service: "Wood Polishing",
      price: "₹25-40/sq.ft",
      description: "PU/Melamine polishing for doors & furniture",
    },
    {
      service: "Waterproofing",
      price: "₹45-75/sq.ft",
      description: "Terrace, bathroom, basement waterproofing",
    },
    {
      service: "Commercial Painting",
      price: "Custom Quote",
      description: "Offices, tech parks, retail spaces",
    },
  ];

  const faqs = [
    {
      question: "Are material costs included?",
      answer:
        "Yes, all our pricing includes premium quality paints and materials. No hidden charges.",
    },
    {
      question: "How is the area calculated?",
      answer:
        "We measure the actual paintable area (walls + ceiling). Windows and doors are deducted.",
    },
    {
      question: "What brands do you use?",
      answer:
        "We use top brands including Asian Paints, Berger, Dulux, and Nippon. You can choose your preference.",
    },
    {
      question: "Do you provide warranty?",
      answer:
        "Yes! We offer 3-7 year warranty depending on the plan, covering peeling, flaking, and fading.",
    },
    {
      question: "What about furniture moving?",
      answer:
        "We help move and protect your furniture. We recommend removing valuable items beforehand.",
    },
    {
      question: "How long does it take?",
      answer:
        "A typical 2BHK takes 5-7 days. Timeline depends on area size and complexity.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            No hidden charges. No surprises. Just honest pricing for quality work.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-2 ${
                  plan.popular
                    ? "border-accent shadow-xl scale-105"
                    : "border-border shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-6 py-2 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <div className="mt-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {plan.unit}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-secondary/50 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        {plan.ideal}
                      </p>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-accent hover:bg-accent/90"
                          : "bg-primary hover:bg-primary/90"
                      }`}
                      size="lg"
                    >
                      Get Free Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized painting and treatment services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.service}
                  </h3>
                  <div className="text-2xl font-bold text-accent mb-3">
                    {service.price}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Want an Exact Quote for Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Share your requirements and get a detailed, itemized quote within
                24 hours. Our expert will visit your property for free.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Request Free Site Visit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing FAQs
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our pricing and services
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
            Book a free consultation and get your personalized quote today
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
            <a href="tel:+918012345678">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8"
              >
                Call: +91 80123 45678
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
