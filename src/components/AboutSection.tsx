import videoAbout from "@/assets/video/about-video.mov";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6 font-['Roboto']">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span style={{ color: "#182559" }}>Sobre </span>
              <span style={{ color: "#7764ff" }}>mim:</span>
            </h2>

            <p className="text-[#182559] leading-relaxed">
              Sou a Virna Oliveira, Product Owner em constante evolução e apaixonada
              por usar tecnologia para revolucionar realidades. Minha jornada começou
              no técnico de Desenvolvimento de Sistemas, onde fui premiada no Inova
              SENAI Sergipe com um software de gestão de ativos e ali nasceu meu desejo
              de criar soluções com impacto. Aos 17 anos, assumi a liderança de um
              departamento de tecnologia e descobri meu potencial em gestão e
              transformação digital.
            </p>

            <p className="text-[#182559] leading-relaxed">
              Com base como desenvolvedora full stack, aprendi a traduzir complexidade
              técnica em clareza estratégica. Hoje, na Nextios, atuo com produtos em
              cloud (AWS, Azure, GCP) e produtividade digital, conduzindo pesquisas de
              mercado, estruturando documentações estratégicas e apoiando decisões que
              conectam pessoas, tecnologia e negócios. Quero participar de algo maior:
              transformar desafios em soluções digitais que gerem impacto real e
              duradouro.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <video
              src={videoAbout}
              controls
              className="w-72 h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;