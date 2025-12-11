import { Button } from '@/components/ui/button';
import { ArrowRight, User, Users, Crosshair, Ship } from 'lucide-react';

// --- Component: Dark Navy Navigation Bar ---
const HeroNavButtons = () => {
  const buttons = [
    { icon: User, label: 'Customer Portal', href: '/customer-portal' },
    { icon: Users, label: 'Partner Portal', href: '/partner-portal' },
    { icon: Crosshair, label: 'Tracking', href: '/tracking' }, // Changed icon to Crosshair to match image
    { icon: Ship, label: 'Sailing Schedule', href: '/sailing-schedule' },
  ];

  return (
    // Position: Bottom of Hero, centered
    <div className="absolute bottom-12 left-0 right-0 z-20 hidden md:block">
      <div className="container mx-auto px-4">
        
        {/* Width Constraint: Matches the 'floating bar' look, not full screen width */}
        <div className="max-w-5xl mx-auto">
          
          {/* Main Bar: Dark Navy, Rounded, Glass Effect */}
          <div className="flex w-full bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`
                  relative flex-1 h-[80px] flex items-center justify-center space-x-4
                  transition-all duration-300 ease-in-out
                  hover:bg-white/5 cursor-pointer group
                  
                  // Vertical Divider: Adds a border to the right of every item EXCEPT the last one
                  ${index !== buttons.length - 1 ? 'border-r border-white/10' : ''}
                `}
              >
                {/* Icon Wrapper: Circle with slight transparency */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-gray-300 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <button.icon className="w-5 h-5" />
                </div>

                {/* Text Label */}
                <span className="text-white font-body font-medium text-lg tracking-wide group-hover:text-accent transition-colors">
                  {button.label}
                </span>
              </a>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Hero Component ---
const Hero = () => {
  return (
    <section id="home" className="relative h-[600px] md:h-[800px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/Hero01.jpg')` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-navy/30" />
      </div>

      {/* Content Area */}
      {/* Added extra padding-bottom (pb-32) so content doesn't overlap the nav bar */}
      <div className="relative container mx-auto px-4 h-full flex items-center pb-32">
        <div className="max-w-2xl text-left">
          <p className="font-body text-accent font-semibold mb-4 animate-fade-in tracking-wider">
            TRUSTED LOGISTICS PARTNER
          </p>

          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white animate-slide-in-left"
            style={{ animationDelay: '0.2s' }}
          >
            Get the Best Logistics
            <span className="text-accent"> Service </span>
            with One Global Consolidators
          </h1>

          <p
            className="font-body text-lg md:text-xl text-gray-100 mb-8 animate-slide-in-left"
            style={{ animationDelay: '0.4s' }}
          >
            Your trusted partner for sea and air freight solutions. We deliver excellence across borders with reliability and precision.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-accent hover:bg-red-hover text-accent-foreground font-body font-semibold px-8">
              Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-black font-body transition-colors"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Insert Navigation Bar */}
      <HeroNavButtons />

    </section>
  );
};

export default Hero;
