import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      lines: ['One Global Logistics Services WLL', 'Al Nasr Tower A', 'Al Corniche Street', 'Doha, Qatar'],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['International: +974 4000 1234', 'Freight Services: +974 4000 5678', 'Customer Support: +974 4000 9012'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@oneglobal.com', 'support@oneglobal.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      lines: ['Sunday - Thursday', '8:00 AM - 5:00 PM'],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            CONTACT US
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for inquiries, quotes, or any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-background p-8 rounded-xl shadow-sm animate-slide-in-left">
            <h3 className="font-heading text-xl font-bold text-primary mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="font-body"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="font-body"
                />
              </div>
              <div>
                <Input
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="font-body"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="font-body resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-red-hover text-accent-foreground font-body font-semibold">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <h3 className="font-heading text-xl font-bold text-primary mb-6">Our Office</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-primary mb-1">{info.title}</h4>
                      {info.lines.map((line, idx) => (
                        <p key={idx} className="font-body text-muted-foreground text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
