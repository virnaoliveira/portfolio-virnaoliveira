import FANESE from "@/assets/coord.png";
import JAMSOFT from "@/assets/jamsoft.png";
import PGE from "@/assets/pge.png";
import NEXTIOS from "@/assets/nextios.png";

const TimelineSection = () => {
  const timelineItems = [
    {
      year: "2020 - 2021",
      title: "Coordenadora de Tecnologia",
      company: "FANESE",
      image: FANESE, 
    }, 
    {
      year: "2021 - 2023",
      title: "Desenvolvedora Full-Stack",
      company: "JAMSOFT INFORMÁTICA",
      image: JAMSOFT,
    }, 
    {
      year: "2023 - 2024",
      title: "Desenvolvedora Full-Stack",
      company: "PGE - SE",
      image: PGE,
    }, 
    {
      year: "2024 - Atual",
      title: "Analista de Produto I",
      company: "NEXTIOS",
      image: NEXTIOS,
    }, 
  ];

  return (
    <section className="py-16 px-4 bg-[#1D2A55] text-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-12">
          Minha jornada até aqui...
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Foto circular */}
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#D6B8FF]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Ano */}
              <div className="bg-[#D6B8FF] text-[#1D2A55] px-3 py-1 rounded-full text-sm font-semibold mx-auto">
                {item.year}
              </div>

              {/* Título e empresa */}
              <div className="space-y-1">
                <h3 className="font-bold text-sm ">{item.title}</h3>
                <p className="text-sm font-bold text-[#D6B8FF]">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
