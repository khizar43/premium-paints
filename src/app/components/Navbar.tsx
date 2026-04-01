import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2 sm:py-3" : "bg-white/95 backdrop-blur-sm py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">PP</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base sm:text-lg text-primary leading-tight">
                Premium Paints
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Bangalore's Finest
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-accent font-medium ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="tel:+918012345678">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>+91 80123 45678</span>
              </Button>
            </a>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile: Quote Button + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link to="/contact">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-xs sm:text-sm px-3 sm:px-4">
                Get Quote
              </Button>
            </Link>
            <button
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-1 border-t pt-4 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 rounded-lg transition-all font-medium ${
                  location.pathname === link.path
                    ? "bg-accent/10 text-accent"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}