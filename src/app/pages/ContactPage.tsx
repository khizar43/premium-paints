import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    area: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        area: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 80123 45678", "+91 80123 45679"],
      action: "tel:+918012345678",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@premiumpaints.com", "support@premiumpaints.com"],
      action: "mailto:info@premiumpaints.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123, MG Road, Indiranagar", "Bangalore - 560038, Karnataka"],
      action: null,
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday: 9 AM - 7 PM", "Sunday: 10 AM - 5 PM"],
      action: null,
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in your painting services. Can you please share more details?"
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to transform your space? Contact us for a free consultation and
            detailed quote
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Request a Free Quote
                  </h2>
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        We've received your request. Our team will contact you
                        within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Required *</Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) =>
                              setFormData({ ...formData, service: value })
                            }
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="interior">
                                Interior Painting
                              </SelectItem>
                              <SelectItem value="exterior">
                                Exterior Painting
                              </SelectItem>
                              <SelectItem value="texture">
                                Texture & Design
                              </SelectItem>
                              <SelectItem value="commercial">
                                Commercial Painting
                              </SelectItem>
                              <SelectItem value="wood">
                                Wood Polishing
                              </SelectItem>
                              <SelectItem value="waterproofing">
                                Waterproofing
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="area">Approx. Area (sq.ft)</Label>
                          <Input
                            id="area"
                            name="area"
                            placeholder="e.g., 1500"
                            value={formData.area}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Details</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project, preferred timeline, or any specific requirements..."
                          className="min-h-32"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90"
                      >
                        <Send className="mr-2 w-5 h-5" />
                        Submit Request
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className={`text-sm ${
                              info.action
                                ? "text-accent hover:underline cursor-pointer"
                                : "text-muted-foreground"
                            }`}
                            onClick={() => info.action && window.open(info.action)}
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* WhatsApp CTA */}
              <Card className="border-2 border-accent bg-gradient-to-br from-accent/5 to-accent/10">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get instant replies on WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/918012345678?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <MessageCircle className="mr-2 w-4 h-4" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="bg-muted h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  123, MG Road, Indiranagar, Bangalore - 560038
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline mt-2 inline-block"
                >
                  Get Directions on Google Maps
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Premium painting services across Bangalore
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              "Indiranagar",
              "Koramangala",
              "Whitefield",
              "HSR Layout",
              "Electronic City",
              "Marathahalli",
              "Jayanagar",
              "JP Nagar",
              "Bannerghatta Road",
              "Sarjapur Road",
              "Hebbal",
              "Yelahanka",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Call us now for urgent queries or emergency painting services
          </p>
          <a href="tel:+918012345678">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call: +91 80123 45678
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
