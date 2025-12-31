// HPI 1.6-V
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Gamepad2, Cpu, Globe, ChevronDown, Terminal, Layers, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// --- Canonical Data Sources ---
const SERVICES = [
  { 
    id: 'web', 
    title: 'Website Development', 
    icon: Globe, 
    desc: 'Custom websites built with modern frameworks and optimized for performance.',
    tags: ['React', 'Astro', 'Next.js']
  },
  { 
    id: 'api', 
    title: 'API Development', 
    icon: Code, 
    desc: 'Robust APIs designed for scalability and seamless integration.',
    tags: ['REST', 'GraphQL', 'Node.js']
  },
  { 
    id: '3d', 
    title: '3D Design', 
    icon: Palette, 
    desc: 'Immersive 3D models and visualizations for products and experiences.',
    tags: ['Blender', 'Three.js', 'WebGL']
  },
  { 
    id: 'game', 
    title: 'Game Development', 
    icon: Gamepad2, 
    desc: 'Engaging games across platforms with compelling mechanics and visuals.',
    tags: ['Unity', 'Unreal', 'C#']
  },
  { 
    id: 'soft', 
    title: 'Software Development', 
    icon: Cpu, 
    desc: 'Enterprise software solutions engineered for efficiency and growth.',
    tags: ['SaaS', 'Cloud', 'Enterprise']
  },
];

const FEATURES = [
  { 
    title: 'Technical Excellence', 
    desc: 'Leveraging the latest technologies and best practices to deliver superior results.',
    stat: '99.9%',
    statLabel: 'Uptime'
  },
  { 
    title: 'Custom Solutions', 
    desc: 'Every project is tailored to meet your specific business requirements.',
    stat: '100%',
    statLabel: 'Tailored'
  },
  { 
    title: 'Proven Track Record', 
    desc: 'Successfully delivered projects across industries and platforms.',
    stat: '100+',
    statLabel: 'Projects'
  },
];

// --- Utility Components ---

/**
 * Intersection Observer Component for Scroll Reveals
 * Safe, performant, and reusable.
 */
type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'slide-in' | 'scale-up';
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  className, 
  delay = 0,
  animation = 'fade-up' 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.15 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'slide-in': return 'translate-x-[-20px] opacity-0';
      case 'scale-up': return 'scale-95 opacity-0';
      case 'fade-up': default: return 'translate-y-8 opacity-0';
    }
  };

  return (
    <div 
      ref={ref} 
      className={cn(
        "transition-all duration-1000 ease-out will-change-transform", 
        getAnimationClass(),
        className
      )}
    >
      {children}
    </div>
  );
};

// --- Section Components ---

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-background flex flex-col justify-between overflow-hidden">
      {/* 3D Wireframe Room Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-secondary/10" strokeWidth="0.5"/>
            </pattern>
            <pattern id="largeGrid" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect width="200" height="200" fill="url(#smallGrid)"/>
              <path d="M 200 0 L 0 0 0 200" fill="none" stroke="currentColor" className="text-secondary/20" strokeWidth="1"/>
            </pattern>
          </defs>
          
          {/* Perspective Lines */}
          <g className="text-secondary/10">
            <line x1="0" y1="0" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" />
            <line x1="100%" y1="0" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="100%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" />
            <line x1="100%" y1="100%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" />
          </g>

          {/* Central Vanishing Point Grid */}
          <rect width="100%" height="100%" fill="url(#largeGrid)" className="opacity-30" />
        </svg>

        {/* Floating Blocks (CSS Animation) */}
        <div className="absolute inset-0 perspective-1000">
          {/* Block 1 */}
          <div className="absolute top-[20%] left-[15%] w-24 h-12 bg-primary/90 animate-float-slow shadow-lg transform rotate-12" />
          {/* Block 2 */}
          <div className="absolute top-[40%] right-[20%] w-32 h-8 bg-primary/80 animate-float-medium shadow-lg transform -rotate-6" />
          {/* Block 3 */}
          <div className="absolute bottom-[30%] left-[30%] w-16 h-16 bg-primary animate-float-fast shadow-lg transform rotate-45" />
          {/* Block 4 - Distant */}
          <div className="absolute top-[15%] right-[35%] w-12 h-4 bg-primary/60 animate-pulse transform rotate-0" />
        </div>
      </div>
      {/* Header Content */}
      <header className="relative z-20 w-full max-w-[120rem] mx-auto px-6 py-8 flex justify-between items-center">
        <div className="font-paragraph font-bold text-xl tracking-tighter">
          Golden Z vision <span className="text-primary">_</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-paragraph">
          <Link to="/store" className="hover:text-primary transition-colors text-lg">Services</Link>
          <Link to="/about" className="hover:text-primary transition-colors text-lg">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors text-lg">Contact</Link>
        </nav>
        <Link to="/login" className="text-sm font-paragraph hover:text-primary transition-colors">
          Log In
        </Link>
      </header>
      {/* Main Hero Content */}
      <div className="relative z-10 flex-grow flex items-center px-6">
        <div className="w-full max-w-[120rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <AnimatedElement delay={200}>
              <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-secondary mb-8 lg:text-8xl font-fraunces">
                Golden Z vision<br />
                
              </h1>
            </AnimatedElement>
            
            <AnimatedElement delay={400}>
              <p className="font-paragraph text-lg md:text-xl max-w-2xl text-secondary/80 mb-12 border-l-2 border-primary pl-6">
                We engineer the future of digital interaction. From immersive 3D environments to enterprise-grade software ecosystems.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={600}>
              <div className="flex flex-wrap gap-4">
                <Link to="/store">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-white px-8 py-6 text-lg font-paragraph transition-all duration-300 border-transparent hover:border-primary border border-none rounded-[10px]">
                    {'{ Initialize_Project }'}
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="px-8 py-6 text-lg font-paragraph hover:bg-secondary hover:text-white transition-all duration-300 bg-secondary-foreground rounded-[13px] border-black border border-none">
                    About Us
                  </Button>
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
      {/* Footer Ticker */}
      <div className="relative z-5 border-t border-secondary/10 bg-background/80 backdrop-blur-sm shadow-[inset_0px_0px_4px_0px_#bfbfbf] py-[43px] px-0">
        <div className="overflow-hidden whitespace-nowrap flex">
          <div className="animate-marquee flex gap-12 items-center font-paragraph text-sm text-secondary">
            {SERVICES.map((s, i) => (
              <React.Fragment key={i}>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {s.title.toUpperCase()}
                </span>
                <span>//</span>
              </React.Fragment>
            ))}
             {SERVICES.map((s, i) => (
              <React.Fragment key={`dup-${i}`}>
                <span className="flex items-center gap-2 text-5xl">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {s.title.toUpperCase()}
                </span>
                <span className="text-4xl">//</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StickyFeatures = () => {
  return (
    <section className="w-full bg-background py-32 relative">
      <div className="max-w-[120rem] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          {/* Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <AnimatedElement>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-1 bg-primary"></div>
                  <span className="font-paragraph text-sm tracking-widest uppercase">Why Choose Us</span>
                </div>
                <h2 className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-8">
                  ENGINEERED<br/>FOR<br/>IMPACT
                </h2>
                <p className="font-paragraph text-lg text-secondary/70 mb-12">
                  We don't just build software; we architect digital ecosystems that drive measurable business growth.
                </p>
                <Link to="/about">
                  <Button variant="outline" className="rounded-none border-secondary hover:bg-secondary hover:text-white transition-all">
                    About The Company
                  </Button>
                </Link>
              </AnimatedElement>
            </div>
          </div>

          {/* Scrollable Features */}
          <div className="lg:w-2/3 flex flex-col gap-32 pt-12">
            {FEATURES.map((feature, index) => (
              <AnimatedElement key={index} animation="slide-in" className="group">
                <div className="relative border-l border-secondary/20 pl-12 py-4 hover:border-primary transition-colors duration-500">
                  {/* Decorative Dot */}
                  <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-secondary group-hover:bg-primary transition-colors duration-500" />
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                    <div className="max-w-xl">
                      <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="font-paragraph text-lg text-secondary/60 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-heading text-6xl font-bold text-secondary/10 group-hover:text-primary/20 transition-colors">
                        {feature.stat}
                      </span>
                      <span className="font-paragraph text-xs tracking-widest uppercase text-secondary/40">
                        {feature.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsBanner = () => {
  return (
    <section className="w-full bg-secondary text-secondary-foreground py-48 relative overflow-hidden flex items-center justify-center">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Parallax Text Effect (Simulated with CSS) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="font-heading text-[20vw] font-bold text-white/5 select-none whitespace-nowrap animate-pulse-slow">
          100+ PROJECTS
        </span>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <AnimatedElement animation="scale-up">
          <div className="inline-block mb-6">
            <Terminal className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="h-px w-24 bg-primary mx-auto"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 leading-tight">
            "Innovation distinguishes between a leader and a follower."
          </h2>
          <p className="font-paragraph text-primary text-lg mb-12">
            [ SINCE 2020 ]
          </p>
          <Link to="/store">
            <Button className="bg-primary text-white hover:bg-white hover:text-secondary rounded-none px-10 py-6 text-lg font-paragraph transition-all duration-300">
              Start Your Journey
            </Button>
          </Link>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-secondary selection:bg-primary selection:text-white">
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translate(0, 0) scale(1) !important;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(15deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-10px) rotate(40deg); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-marquee { animation: marquee 30s linear infinite; }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

      <HeroSection />
      <StickyFeatures />
      <StatsBanner />
    </div>
  );
}