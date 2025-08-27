import leoSantanaImg from "@/assets/personal/leo-santana.png";
import detectiveImg from "@/assets/personal/detective.png";
import travelImg from "@/assets/personal/travel.png";

const PersonalSection = () => {
  const personalItems = [
    {
      title: "FÃ DO LEO SANTANA",
      description: "tristeza não resiste a uma música baiana!!!",
      image: leoSantanaImg,
    },
    {
      title: "DETETIVE DE SOFÁ",
      description: "relaxo assistindo crimes resolvidos :')",
      image: detectiveImg,
    },
    {
      title: "VIAJANTE",
      description: "sou apaixonada por descobrir o mundo <3",
      image: travelImg,
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#1D2A55] text-left">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Além da <span className="text-[#D9A7F7]">produteira...</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {personalItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-xl mx-auto"
              />
              <div>
                <h3 className="font-bold uppercase text-white text-center">
                  {item.title}
                </h3>
                <p className="text-[#D9A7F7] text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
