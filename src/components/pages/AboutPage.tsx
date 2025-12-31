import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Lightbulb, Target, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-secondary selection:bg-primary selection:text-white">
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translate(0, 0) scale(1) !important;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] bg-background flex flex-col justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-secondary/10" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[120rem] mx-auto px-6 w-full">
          <AnimatedElement delay={200}>
            <h1 className="font-heading text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-secondary mb-8">
              ABOUT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">GOLDEN Z VISION</span>
            </h1>
          </AnimatedElement>
          
          <AnimatedElement delay={400}>
            <p className="font-paragraph text-lg md:text-xl max-w-2xl text-secondary/80 border-l-2 border-primary pl-6">
              We are architects of digital transformation, crafting innovative solutions that push the boundaries of what's possible.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-secondary text-secondary-foreground py-32">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedElement>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-1 bg-primary"></div>
                  <span className="font-paragraph text-sm tracking-widest uppercase">Our Mission</span>
                </div>
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  Transforming Ideas Into Reality
                </h2>
                <p className="font-paragraph text-lg text-white/80 mb-8 leading-relaxed">
                  At Golden Zvision, we believe that technology should empower businesses to achieve their boldest ambitions. Our mission is to deliver cutting-edge digital solutions that combine technical excellence with creative innovation.
                </p>
                <p className="font-paragraph text-lg text-white/80 leading-relaxed">
                  From concept to deployment, we partner with our clients to build solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={200} animation="slide-in">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 p-8 rounded-lg border border-white/20 hover:border-primary transition-colors">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-3">Strategic Focus</h3>
                  <p className="font-paragraph text-sm text-white/70">Aligned with your business goals</p>
                </div>
                <div className="bg-white/10 p-8 rounded-lg border border-white/20 hover:border-primary transition-colors">
                  <Lightbulb className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-3">Innovation</h3>
                  <p className="font-paragraph text-sm text-white/70">Pushing boundaries constantly</p>
                </div>
                <div className="bg-white/10 p-8 rounded-lg border border-white/20 hover:border-primary transition-colors">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-3">Collaboration</h3>
                  <p className="font-paragraph text-sm text-white/70">True partnership approach</p>
                </div>
                <div className="bg-white/10 p-8 rounded-lg border border-white/20 hover:border-primary transition-colors">
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-3">Excellence</h3>
                  <p className="font-paragraph text-sm text-white/70">Uncompromising quality</p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-background py-32">
        <div className="max-w-[120rem] mx-auto px-6">
          <AnimatedElement className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-1 bg-primary"></div>
              <span className="font-paragraph text-sm tracking-widest uppercase">Core Values</span>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8">
              What Drives Us
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Technical Excellence',
                desc: 'We leverage the latest technologies and best practices to deliver superior results that stand the test of time.'
              },
              {
                title: 'Client-Centric Approach',
                desc: 'Your success is our success. We work closely with you to understand your vision and exceed expectations.'
              },
              {
                title: 'Continuous Innovation',
                desc: 'We stay ahead of industry trends and constantly evolve our solutions to provide competitive advantages.'
              }
            ].map((value, index) => (
              <AnimatedElement key={index} delay={index * 200} animation="fade-up">
                <div className="group relative bg-white p-12 rounded-lg border border-secondary/10 hover:border-primary transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity rounded-lg"></div>
                  <div className="relative z-10">
                    <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="font-paragraph text-secondary/70 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-secondary text-secondary-foreground py-32">
        <div className="max-w-[120rem] mx-auto px-6 text-center">
          <AnimatedElement animation="scale-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Vision?
            </h2>
            <p className="font-paragraph text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary. Get in touch with our team today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/store">
                <Button className="bg-primary text-white hover:bg-white hover:text-secondary rounded-none px-10 py-6 text-lg font-paragraph transition-all duration-300 flex items-center gap-2">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="rounded-none px-10 py-6 text-lg font-paragraph border-white hover:bg-white hover:text-secondary transition-all duration-300">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}
