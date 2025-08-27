import slackLogo from "@/assets/tools/slack.png";
import officeLogo from "@/assets/tools/office.png";
import figmaLogo from "@/assets/tools/figma.png";
import githubLogo from "@/assets/tools/github.png";
import googleLogo from "@/assets/tools/google.png";
import drawioLogo from "@/assets/tools/drawio.png";
import awsLogo from "@/assets/tools/aws.png";
import vscodeLogo from "@/assets/tools/vscode.png";
import postmanLogo from "@/assets/tools/postman.png";
import trelloLogo from "@/assets/tools/trello.png";
import notionLogo from "@/assets/tools/notion.png";
import clickupLogo from "@/assets/tools/clickup.png";

const SkillsSection = () => {
  const skills = [
    "Discovery e validação de produto (Lean/Business Canvas)",
    "Gestão de backlog orientada a impacto",
    "Comunicação e alinhamento de stakeholders",
    "Liderança de equipes e iniciativas multidisciplinares",
    "Pitching estratégico e storytelling de produto",
  ];

  const tools = [
    { name: "Slack", image: slackLogo },
    { name: "Office 365", image: officeLogo },
    { name: "Figma", image: figmaLogo },
    { name: "GitHub", image: githubLogo },
    { name: "Google Workspace", image: googleLogo },
    { name: "Draw.io", image: drawioLogo },
    { name: "AWS", image: awsLogo },
    { name: "VS Code", image: vscodeLogo },
    { name: "Postman", image: postmanLogo },
    { name: "Trello", image: trelloLogo },
    { name: "Notion", image: notionLogo },
    { name: "ClickUp", image: clickupLogo },
  ];

  return (
    <section id="habilidades" className="py-16 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span style={{ color: "#1E1E2F" }}>Habilidades e </span>
          <span style={{ color: "#7764ff" }}>Ferramentas</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Habilidades */}
          <div className="bg-[#D9A7F7] p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-[#1E1E2F]">Habilidades</h3>
            <ul className="space-y-3">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#1E1E2F] mr-2">•</span>
                  <span className="text-[#1E1E2F]">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ferramentas */}
          <div className="bg-[#1D2A55] p-8 rounded-2xl text-white">
            <h3 className="text-xl font-bold mb-6">Ferramentas</h3>
            <div className="grid grid-cols-3 gap-6 place-items-center">
              {tools.map((tool, index) => (
                <img
                  key={index}
                  src={tool.image}
                  alt={tool.name}
                  className="w-14 h-14 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
