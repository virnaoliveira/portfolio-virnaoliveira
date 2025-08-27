const SuccessCasesSection = () => {
  const cases = [
    {
      title: "CASE 1",
      challenge:
        "A empresa precisava avaliar o potencial de uma solução de IA Generativa para integrar ao portfólio de produtos, garantindo clareza técnica, alinhamento entre áreas (comercial, marketing e técnica) e definição de precificação para entrada no mercado.",
      solution:
        "Como Product Owner, conduzi o discovery de um produto de IA Generativa, estruturando fluxogramas e documentação técnica para alinhar áreas técnicas e comerciais. Também defini a estratégia de precificação e posicionamento, garantindo clareza, agilidade na decisão e competitividade no portfólio.",
      results: [
        "Produto com maior número de projetos em desenvolvimento;",
        "Fortalecimento do posicionamento competitivo da empresa;",
        "Aceleração da curva de entendimento do time, reduzindo retrabalho e aumentando a eficiência nas entregas.",
      ],
    },
    {
      title: "CASE 2",
      challenge:
        "Uma instituição de ensino precisava migrar seu sistema de gestão educacional on-premise para a nuvem, sem comprometer a operação acadêmica e administrativa, garantindo continuidade do serviço e boa experiência para professores e alunos.",
      solution:
        "Como coordenadora de tecnologia, liderei a migração de um sistema educacional para a nuvem, estruturando fluxos de suporte e garantindo alinhamento entre setores acadêmicos e administrativos. Essa atuação trouxe estabilidade operacional, melhor comunicação interna e aumento da satisfação de alunos e professores.",
      results: [
        "Migração concluída com estabilidade e mínimo impacto operacional;",
        "Aumento da eficiência dos processos internos;",
        "Elevação da satisfação e confiança dos usuários.",
      ],
    },
    {
      title: "CASE 3",
      challenge:
        "Identificação de falhas na gestão de ativos de uma instituição, que geravam custos elevados e riscos de multas. O desafio era criar uma solução digital para reduzir perdas e otimizar processos.",
      solution:
        "Como responsável de produto, conduzi o discovery e a prototipação de uma solução para gestão de ativos, validando hipóteses com usuários reais e liderando o desenvolvimento do protótipo.",
      results: [
        "Redução significativa de custos operacionais;",
        "Aumento da eficiência no controle e gestão de equipamentos;",
        "Reconhecimento com 1º lugar no Inova SENAI Estadual 2019.",
      ],
    },
  ];

  return (
    <section id="projetos" className="py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-[#1E1E2F]">Cases de </span>
          <span className="text-[#7764ff]">Sucesso</span>
        </h2>

        {/* Cabeçalho da tabela */}
        <div className="grid grid-cols-4 border-b-2 border-[#E0C8F9] pb-4 mb-6">
          <div className="font-bold text-[#7764ff] uppercase"> </div>
          <div className="font-bold text-center text-[#1E1E2F] uppercase">
            Desafio
          </div>
          <div className="font-bold text-center text-[#1E1E2F] uppercase">
            Solução
          </div>
          <div className="font-bold text-center text-[#1E1E2F] uppercase">
            Resultados
          </div>
        </div>

        {/* Linhas dos cases */}
        <div className="space-y-8">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 gap-6 items-start ${
                index !== cases.length - 1 ? "border-b border-gray-200 pb-6" : ""
              }`}
            >
              {/* Case (primeira coluna) */}
              <div className="font-bold text-[#7764ff] uppercase">
                {caseItem.title}
              </div>

              {/* Desafio */}
              <div className="text-sm text-[#1E1E2F] leading-relaxed">
                {caseItem.challenge}
              </div>

              {/* Solução */}
              <div className="text-sm text-[#1E1E2F] leading-relaxed">
                {caseItem.solution}
              </div>

              {/* Resultados */}
              <ul className="text-sm text-[#1E1E2F] space-y-1">
                {caseItem.results.map((result, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#7764ff] mr-2">•</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCasesSection;