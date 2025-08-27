import { Phone, MessageSquare, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 px-4 bg-[#f5f5f5] text-white">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span style={{ color: "#182559" }}>Vamos marcar um café?</span>     
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <a
            href="https://linkedin.com/in/virna-oliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 transition-colors p-4 rounded-lg"
          >
            <MessageSquare size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="tel:+5579999001188"
            className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 transition-colors p-4 rounded-lg"
          >
            <Phone size={24} />
            <span>(79) 99900-1188</span>
          </a>
          <a
            href="mailto:virnaoliveira@gmail.com"
            className="flex items-center justify-center space-x-3 bg-purple-600 hover:bg-purple-700 transition-colors p-4 rounded-lg"
          >
            <Mail size={24} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;