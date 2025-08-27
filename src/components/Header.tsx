import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between font-['Roboto']">
        {/* Logo */}
        <div className="text-xl font-bold" style={{ color: "#182559" }}>
          Virna Oliveira
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="transition-colors"
            style={{ color: "#182559" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#7764ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#182559")}
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="transition-colors"
            style={{ color: "#182559" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#7764ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#182559")}
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("habilidades")}
            className="transition-colors"
            style={{ color: "#182559" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#7764ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#182559")}
          >
            Habilidades
          </button>
          <button
            onClick={() => scrollToSection("projetos")}
            className="transition-colors"
            style={{ color: "#182559" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#7764ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#182559")}
          >
            Projetos
          </button>
          <button
            onClick={() => window.open("https://wa.me/5579933001169", "_blank")}
            className="px-4 py-2 rounded-full transition-colors font-medium"
            style={{ backgroundColor: "#7764ff", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6655dd")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7764ff")}
          >
            Fale Comigo!
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: "#182559" }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <nav className="container max-w-6xl mx-auto px-4 py-4 flex flex-col space-y-4 font-['Roboto']">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left transition-colors"
              style={{ color: "#182559" }}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left transition-colors"
              style={{ color: "#182559" }}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="text-left transition-colors"
              style={{ color: "#182559" }}
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-left transition-colors"
              style={{ color: "#182559" }}
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="px-4 py-2 rounded-full w-fit transition-colors font-medium"
              style={{ backgroundColor: "#7764ff", color: "#fff" }}
            >
              Fale Comigo!
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
