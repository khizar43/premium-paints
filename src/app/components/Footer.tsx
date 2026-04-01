import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-12 sm:mt-16 lg:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PP</span>
              </div>
              <span className="font-semibold text-lg">Premium Paints</span>
            </div>
            <p className="text-white/80 mb-4 text-sm sm:text-base">
              Bangalore's most trusted painting contractors. Delivering excellence
              since 2015.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors active:scale-95"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors active:scale-95"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base active:scale-95 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base active:scale-95 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base active:scale-95 inline-block">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base active:scale-95 inline-block">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base active:scale-95 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-base sm:text-lg">Our Services</h3>
            <ul className="space-y-2 text-white/80 text-sm sm:text-base">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Texture & Designs</li>
              <li>Commercial Painting</li>
              <li>Wood Polishing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-base sm:text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm sm:text-base">
                  123, MG Road, Indiranagar, Bangalore - 560038
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919066330362"
                  className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base active:scale-95"
                >
                  9066330262
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@premiumpaints.com"
                  className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base active:scale-95"
                >
                  info@premiumpaints.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Premium Paints Bangalore. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}