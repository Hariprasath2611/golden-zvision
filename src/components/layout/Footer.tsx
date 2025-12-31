import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary border-t border-secondary-foreground/10">
      <div className="max-w-[100rem] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="font-paragraph text-xl font-bold text-secondary-foreground mb-4">
              {'<'} GoldenZvision {' />'}
            </div>
            <p className="font-paragraph text-sm text-secondary-foreground/70">
              Professional digital solutions for modern businesses
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-paragraph text-base font-semibold text-secondary-foreground mb-4">
              {'[ QUICK LINKS ]'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/store" 
                  className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/cart" 
                  className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-paragraph text-base font-semibold text-secondary-foreground mb-4">
              {'[ SERVICES ]'}
            </h3>
            <ul className="space-y-2">
              <li className="font-paragraph text-sm text-secondary-foreground/70">
                Website Development
              </li>
              <li className="font-paragraph text-sm text-secondary-foreground/70">
                API Development
              </li>
              <li className="font-paragraph text-sm text-secondary-foreground/70">
                3D Design
              </li>
              <li className="font-paragraph text-sm text-secondary-foreground/70">
                Game Development
              </li>
              <li className="font-paragraph text-sm text-secondary-foreground/70">
                Software Development
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-paragraph text-base font-semibold text-secondary-foreground mb-4">
              {'[ CONTACT ]'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-paragraph text-sm text-secondary-foreground/70">
                  info@goldenzvision.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-paragraph text-sm text-secondary-foreground/70">
                  +91-99999999
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-paragraph text-sm text-secondary-foreground/70">
                  Digital Innovation Hub
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-xs text-secondary-foreground/60">
              © 2025 goldenZvision. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="font-paragraph text-xs text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="font-paragraph text-xs text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
