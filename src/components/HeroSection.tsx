import heroPhoto from "@/assets/hero-photo.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4 font-['Roboto']">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Foto */}
          <div className="flex justify-center md:justify-start">
            <img
              src={heroPhoto}
              alt="Virna Oliveira"
              className="w-80 h-96 object-cover rounded-2xl"
            />
          </div>

          {/* Texto */}
          <div className="space-y-4 text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug">
              <span style={{ color: "#7764ff" }}>Oi,</span>{" "}
              <span style={{ color: "#182559" }}>eu sou a</span>
              <br />
              <span style={{ color: "#182559" }}>Virna Oliveira!</span>
            </h1>

            <p className="text-base text-[#182559] leading-relaxed">
              Product Owner | Transformo visão em estratégia, estratégia em
              produtos e produtos em resultados reais. <br />
              Experiência em Cloud, produtividade digital e documentação
              estratégica que guia decisões.
            </p>

            <p className="text-base text-[#182559] leading-relaxed">
              Faço a ponte entre negócios e tecnologia para gerar impacto
              mensurável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
