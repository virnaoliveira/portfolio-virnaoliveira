import awsBadge from "@/assets/certifications/aws.png";
import scrumBadge from "@/assets/certifications/scrum.png";
import acronisBadge from "@/assets/certifications/acronis.png";
import udemyBadge from "@/assets/certifications/udemy.png";

const CertificationsSection = () => {
  const certifications = [
    { name: "AWS Cloud Practitioner", image: awsBadge },
    { name: "Scrum Fundamentals Certified", image: scrumBadge },
    { name: "Acronis Fundamentals Cloud Tech", image: acronisBadge },
    { name: "Curso de Gestão de Produtos - Udemy", image: udemyBadge },
  ];

  return (
    <section className="py-16 px-4 bg-[#D9A7F7]">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-12 text-[#1E1E2F]">
          Certificações
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-28 h-28 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
