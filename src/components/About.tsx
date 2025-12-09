import { CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    'Licensed freight forwarding company',
    'Expert team with decades of experience',
    'Global network spanning 50+ countries',
    'Competitive rates with no hidden charges',
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            ABOUT US
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            One Global Consolidators (OGC) is a licensed freight forwarding company. OGC is known worldwide for operating a fully fledged container services across the globe. Our team is backed by decades of experience in the freight forwarding and logistics industry, ensuring that we deliver exceptional service to every customer.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
            We specialize in providing comprehensive logistics solutions tailored to meet the unique needs of businesses worldwide. Our commitment to excellence and customer satisfaction has made us a trusted partner for companies seeking reliable freight management services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-secondary rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-body text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
