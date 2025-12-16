import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  // Updated hrefs to match the IDs in Index.tsx
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },       // Scrolls to KeyFeatures section
    { name: "Vision & Mission", href: "#vision" }, // Scrolls to VisionMission section
    { name: "Careers", href: "#careers" },         // Scrolls to Careers/ValuePropositions section
    { name: "Contact us", href: "#contact" },      // Scrolls to Contact section
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* MAIN FOOTER CONTENT */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* COLUMN 1: About Us */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">About Us</h3>
            <p className="font-body text-primary-foreground/80 text-sm leading-7">
              One Global Logistics services W.L.L is a Qatar based global NVOCC
              (Non-vessel owned common carrier) operator providing LCL
              consolidation services worldwide markets.
            </p>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="md:pl-10">
            <h3 className="font-heading font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 font-body text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Our Office */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Our Office</h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="font-body text-primary-foreground/80 text-sm leading-relaxed">
                  <p className="font-bold mb-1">
                    One Global Logistics Services W.L.L
                  </p>
                  <p>Office no: 48, 2nd Floor</p>
                  <p>Al matar Centre, Old Airport Road</p>
                  <p>Doha, Qatar</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">
                  +974 558 558 36 / 446 79 444 / 446 79 400
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@oneglobalqatar.com"
                  className="font-body text-primary-foreground/80 text-sm hover:text-accent underline decoration-accent/50"
                >
                  info@oneglobalqatar.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* LOGO SECTION */}
        <div className="mt-16 flex justify-center">
          <div className="border border-primary-foreground/30 px-8 py-4 inline-block text-center">
            <span className="font-heading font-bold text-3xl tracking-wide block">
              ONE
            </span>
            <span className="font-heading text-xs tracking-[0.2em] text-primary-foreground/70 block mt-1">
              GLOBAL LOGISTICS
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-primary-foreground/60 text-sm">
              © 2025 One Global Logistics. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
