import { Link } from 'react-router-dom';
import { MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-textprimary/10 sticky top-0 z-40">
      <div className="max-w-[100rem] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-paragraph text-xl font-bold text-textprimary hover:text-primary transition-colors">
            {'<'} goldenZvision {' />'}
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors"
            >
              {'[ HOME ]'}
            </Link>
            <Link 
              to="/store" 
              className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors"
            >
              {'[ SERVICES ]'}
            </Link>
            <Link 
              to="/cart" 
              className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors"
            >
              {'[ CART ]'}
            </Link>
          </nav>

          {/* Mini Cart Icon */}
          <div className="flex items-center">
            <MiniCart 
              cartIcon={ShoppingCart}
              cartIconClassName="text-textprimary hover:text-primary transition-colors cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
