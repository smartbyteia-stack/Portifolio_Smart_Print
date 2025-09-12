import Bentolio from "@/components/ui/bentolio";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Bentolio
        name={{
          first: "SEU",
          last: "NOME"
        }}
        title="Desenvolvedor Full Stack & Designer"
        description="Criando experiências digitais incríveis com tecnologias modernas. Especializado em React, Next.js e design de interfaces."
        curvedText="Digital"
        projects={[
          {
            name: "Portfolio",
            image: "/bentolio/images/bentolio.png",
            link: "#"
          },
          { name: "E-commerce", link: "#" },
          { name: "Dashboard", link: "#" },
          { name: "Mobile App", link: "#" }
        ]}
        socialLinks={[
          { name: "GitHub", url: "https://github.com/seuusuario" },
          { name: "LinkedIn", url: "https://linkedin.com/in/seuusuario" },
          { name: "Twitter", url: "https://twitter.com/seuusuario" }
        ]}
        bg="#E8F3FF"
        secondary="#B8DCFF"
      />
    </div>
  );
}
