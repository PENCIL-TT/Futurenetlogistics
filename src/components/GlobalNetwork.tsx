import { Globe, MapPin, Ship, Plane, Warehouse, Container } from 'lucide-react';

const GlobalNetwork = () => {
  const locations = [
    { icon: Globe, name: 'United States', description: 'Major ports coverage' },
    { icon: MapPin, name: 'Europe', description: 'EU-wide logistics' },
    { icon: Ship, name: 'Asia Pacific', description: 'Comprehensive network' },
    { icon: Plane, name: 'UAE & Middle East', description: 'Strategic hub' },
    { icon: Warehouse, name: 'Jebel Ali Free Zone', description: 'Logistics Facility' },
    { icon: Container, name: 'Doha, Qatar', description: 'Head Office' },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            OUR GLOBAL NETWORK
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            With strategically located offices and partners worldwide, we ensure seamless logistics operations across continents.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {locations.map((location, index) => {
            const Icon = location.icon;
            return (
              <div
                key={index}
                className="group bg-background p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-primary mb-1">{location.name}</h3>
                <p className="font-body text-sm text-muted-foreground">{location.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
