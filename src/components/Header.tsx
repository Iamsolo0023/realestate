import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Careers", href: "/Career" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 animated-navbar" >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/lovable-uploads/73f1ec84-4880-4bfa-8685-079a5bdbbc49.png"
                alt="Shridhar Developers Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              Shridhar Developers
            </span>
          </div>

          {/* Desktop Navigation */}
          <style jsx global>{`
            @keyframes glowPulse {
              0%, 100% {
                opacity: 0.1;
                transform: scale(1);
              }
              50% {
                opacity: 1;
                transform: scale(1.1);
              }
            }
            .animate-glow-pulse {
              animation: glowPulse 2s ease-in-out infinite;
            }

            @keyframes goldFlow {
              0%   { background-position: 0% 0%; }
              25%  { background-position: 50% 25%; }
              50%  { background-position: 100% 100%; }
              75%  { background-position: 25% 75%; }
              100% { background-position: 0% 0%; }
            }
            .animated-navbar {
              background: linear-gradient(
                135deg,
                #e8c088ff,
                #f3f1efff,
                #f7f0aeff
              );
              background-size: 400% 400%;
              animation: goldFlow 10s ease-in-out infinite;
              backdrop-filter: blur(8px);
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }0

            @keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}


            @keyframes sparkle {
              0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
              }
              100% {
                transform: translate(var(--x), var(--y)) scale(0.5);
                opacity: 0;
              }
            }
            .sparkle {
              position: absolute;
              border-radius: 50%;
              filter: blur(1px);
              pointer-events: none;
              animation: sparkle linear infinite;
            }
              .orbit-sparkle {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
}

@keyframes orbit {
  0%   { transform: rotate(0deg) translateX(0); }
  100% { transform: rotate(360deg) translateX(0); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.5); }
}

          `}</style>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium group animate-slide-up-fade"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Important Highlights Button with aura + surrounding particles */}
            <div className="relative inline-block">
              {/* Glow Aura */}
              <div className="absolute inset-0 rounded-lg bg-yellow-400 blur-xl animate-glow-pulse"></div>

  {/* Floating Glitter Halo (constant twinkle all around) */}
          {[...Array(40)].map((_, i) => {
              const colors = ["#d2bf50ff", "#ffd700", "#ffffff", "#ff8c00"];
              const randomColor = colors[Math.floor(Math.random() * colors.length)];
              const angle = Math.random() * 2 * Math.PI; // position in a circle
              const radius = 70 + Math.random() * 40; // distance from button center
              const x = `${Math.cos(angle) * radius}px`;
              const y = `${Math.sin(angle) * radius}px`;
  
              return (
                <span
                    key={i}
                    className="sparkle"
                    style={{
                        width: `${Math.random() * 3 + 2}px`,
                        height: `${Math.random() * 3 + 2}px`,
                        backgroundColor: randomColor,
                        top: `calc(50% + ${y})`,
                        left: `calc(50% + ${x})`,
                        animation: `twinkle ${1 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                    } as React.CSSProperties}
                ></span>
              );
          })}

              <Button className="relative bg-white text-black font-medium rounded-lg shadow-lg px-4 py-2 transition-all duration-300 hover:scale-105 z-10">
                Important Highlights
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-slide-up-fade backdrop-blur-lg bg-background/95 rounded-lg mt-2 border border-border/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-muted/50 animate-slide-up-fade"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4">
                <Button className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 w-full animate-bounce-in">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
