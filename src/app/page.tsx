import Bentolio from "@/components/ui/bentolio";

export default function Home() {
  return (
    <div className="h-screen w-full overflow-auto">
      <Bentolio
        name={{
          first: "SMART",
          last: "PRINT"
        }}
        title="Soluções Inteligentes em Impressão Digital"
        description="Smart Print é líder em soluções de impressão digital, oferecendo tecnologia de ponta para empresas e profissionais. Especializada em impressão de alta qualidade, design gráfico e automação de processos."
        curvedText="Impressão"
        projects={[
          {
            name: "Produtos",
            image: "/bentolio/images/Smart Byte - Horizontal.png",
            link: "#"
          }
        ]}
        socialLinks={[
          { name: "Instagram", url: "https://instagram.com/smartprint" },
          { name: "LinkedIn", url: "https://linkedin.com/company/smartprint" },
          { name: "WhatsApp", url: "https://wa.me/5511999999999" }
        ]}
        profileImage="/bentolio/images/Smart Byte - Horizontal.png"
        bg="#F6F1E9"
        secondary="#EF7722"
        secondaryTextColor="#4F200D"
      />
    </div>
  );
}
