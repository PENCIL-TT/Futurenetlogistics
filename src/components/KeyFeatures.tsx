import { Package, Boxes, FileCheck, DollarSign } from 'lucide-react';

const KeyFeatures = () => {
  const features = [
    {
      icon: Package,
      title: 'Optimize Orders',
      description: 'Optimize orders into container shipments for efficient delivery.',
    },
    {
      icon: Boxes,
      title: 'Consolidation Handling',
      description: 'Expert consolidation handling for both LCL and FCL shipments.',
    },
    {
      icon: FileCheck,
      title: 'Comprehensive',
      description: 'We offer comprehensive full container services worldwide.',
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Cost-effective solutions tailored for your shipping needs.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            SEA (LCL & FCL) / AIR FREIGHT - KEY FEATURES
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-secondary p-8 rounded-xl hover:bg-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 mb-6 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary group-hover:text-primary-foreground mb-3 transition-colors">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
