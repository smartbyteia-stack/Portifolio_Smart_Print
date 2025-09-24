import Bentolio from "@/components/ui/bentolio";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Bentolio
        name={{
          first: "SMART",
          last: "PRINT"
        }}
        title="Soluções Inteligentes em Impressão Digital"
        description="Smart Print é referência em soluções de impressão 3D e digital, oferecendo tecnologia de ponta para empresas e profissionais. Especializada em impressão de alta precisão e design criativo, transformamos ideias em projetos concretos com eficiência e qualidade."
        curvedText="Impressão"
        projectCategories={{
          "Chaveiro": [
            {
              name: "Chaveiro Caveira",
              image: "/carousel/Chaveiro/chaveiro caveira.png",
              link: "#"
            },
            {
              name: "Chaveiro Instagram",
              image: "/carousel/Chaveiro/chaveiro instagram com RFID.png",
              link: "#"
            },
            {
              name: "Chaveiro Tripleween",
              image: "/carousel/Chaveiro/chaveiro tripleween.png",
              link: "#"
            }
          ],
          "Cosplay": [
            {
              name: "Cabeça Jack Skellington",
              image: "/carousel/Cosplay/Cabeça jack skellington.png",
              link: "#"
            },
            {
              name: "Espada Zabuza",
              image: "/carousel/Cosplay/Espada Zabuza.png",
              link: "#"
            },
            {
              name: "Máscara Helldivers",
              image: "/carousel/Cosplay/Máscara Helldivers.png",
              link: "#"
            },
            {
              name: "Máscara Jinx",
              image: "/carousel/Cosplay/Máscara Jinx.png",
              link: "#"
            },
            {
              name: "Objetos Super-Herói",
              image: "/carousel/Cosplay/superhero_objects.png",
              link: "#"
            }
          ],
          "Decoração": [
            {
              name: "Café Derramando",
              image: "/carousel/Decoração/Café Derramando.png",
              link: "#"
            },
            {
              name: "Caneca Personalizada",
              image: "/carousel/Decoração/Caneca Personalizada.png",
              link: "#"
            },
            {
              name: "Lightbox Personalizada",
              image: "/carousel/Decoração/Lightbox Personalizada.png",
              link: "#"
            },
            {
              name: "Porta Doces Personalizado",
              image: "/carousel/Decoração/Porta Doces Personalizado.png",
              link: "#"
            },
            {
              name: "Porta Vinhos Personalizado",
              image: "/carousel/Decoração/Porta Vinhos Personalizado.png",
              link: "#"
            },
            {
              name: "Porta Vinhos",
              image: "/carousel/Decoração/Porta Vinhos.png",
              link: "#"
            },
            {
              name: "Suporte Celular Personalizado com seu Animal",
              image: "/carousel/Decoração/Suporte Celular Personalizado com seu Animal.png",
              link: "#"
            },
            {
              name: "Vaso Personalizado",
              image: "/carousel/Decoração/Vaso Personalizado.png",
              link: "#"
            },
            {
              name: "Luminária Personalizada",
              image: "/carousel/Decoração/luminária personalizada.png",
              link: "#"
            },
            {
              name: "Vasinho Decorativo",
              image: "/carousel/Decoração/vasinho.png",
              link: "#"
            },
            {
              name: "Vaso Branco",
              image: "/carousel/Decoração/vaso_branco.png",
              link: "#"
            }
          ],
          "Games": [
            {
              name: "Suporte Controle Tentáculo",
              image: "/carousel/Games/Suporte Controle tentáculo.png",
              link: "#"
            },
            {
              name: "Suporte Controle",
              image: "/carousel/Games/Suporte Controle.png",
              link: "#"
            },
            {
              name: "Suporte Múltiplos Controles Hulk",
              image: "/carousel/Games/Suporte Múltiplos Controles Hulk.png",
              link: "#"
            }
          ],
          "Personagens": [
            {
              name: "Boneco Stitch",
              image: "/carousel/Personagens/Boneco Stitch.png",
              link: "#"
            },
            {
              name: "Boneco Sua Profissão Personalizado",
              image: "/carousel/Personagens/Boneco Sua Profissão Personalizado.png",
              link: "#"
            },
            {
              name: "Funko Personalizado",
              image: "/carousel/Personagens/Funko Personalizado.png",
              link: "#"
            }
          ],
          "RPG": [
            {
              name: "Boneco RPG Personalizado",
              image: "/carousel/RPG/Boneco RPG Personalizado.png",
              link: "#"
            },
            {
              name: "Torre de Dados Personalizados",
              image: "/carousel/RPG/Torre de Dados Personalizados.png",
              link: "#"
            },
            {
              name: "Torre de Dados",
              image: "/carousel/RPG/Torre de Dados.png",
              link: "#"
            },
            {
              name: "Vida RPG",
              image: "/carousel/RPG/Vida RPG.png",
              link: "#"
            }
          ]
        }}
        socialLinks={[
          { name: "Instagram", url: "https://www.instagram.com/smartprint.3d/" },
          { name: "WhatsApp", url: "https://api.whatsapp.com/send?phone=5569999914773&text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20uma%20impress%C3%A3o%203D" }
        ]}
        contactLink="https://api.whatsapp.com/send?phone=5569999914773&text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20uma%20impress%C3%A3o%203D"
      />
    </div>
  );
}
