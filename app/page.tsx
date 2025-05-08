import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ProceduralAnimation from "@/components/procedural-animation"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import TrustedBy from "@/components/trusted-by"
import Image from "next/image"

export default function Home() {
  const services = [
    {
      title: "Web & Mobile Development",
      description:
        "Creamos experiencias digitales excepcionales con tecnologías de vanguardia para web y dispositivos móviles.",
      icon: "code",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Implementamos soluciones inteligentes que transforman datos en insights accionables y automatizaciones eficientes.",
      icon: "brain",
    },
    {
      title: "Data Engineering & BI Dashboards",
      description:
        "Arquitecturas de datos robustas y visualizaciones que facilitan la toma de decisiones estratégicas.",
      icon: "bar-chart-2",
    },
    {
      title: "Cloud Architecture & DevOps",
      description:
        "Infraestructuras escalables y procesos de desarrollo optimizados para maximizar la eficiencia operativa.",
      icon: "cloud",
    },
    {
      title: "Workshops & Tech Training",
      description: "Programas de capacitación personalizados para potenciar las habilidades técnicas de tu equipo.",
      icon: "graduation-cap",
    },
    {
      title: "MVP & Prototipado Ágil",
      description: "Convertimos ideas en productos viables con metodologías ágiles que aceleran el time-to-market.",
      icon: "rocket",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ProceduralAnimation />
        </div>
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Transformando ideas en <span className="text-[#D4FF00]">soluciones tecnológicas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-[#F0F0F0]/90">
            Desarrollamos tecnología de clase mundial que impulsa el crecimiento de negocios visionarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#D4FF00] text-[#000F0D] hover:bg-[#D4FF00]/90">
              Iniciar proyecto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#F0F0F0]/20 hover:bg-[#F0F0F0]/10">
              Conocer servicios
            </Button>
          </div>
        </div>
        <div className="absolute bottom-12 left-0 right-0">
          <TrustedBy />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#F0F0F0] text-[#0D0D0D] py-64 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Servicios especializados</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#0D0D0D]/80">
              Combinamos expertise técnico con visión estratégica para crear soluciones que definen el futuro digital.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#000F0D] py-64 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Llevemos tu visión al <span className="text-[#D4FF00]">siguiente nivel</span>
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-[#F0F0F0]/80">
            Estamos listos para convertir tus desafíos más complejos en oportunidades de innovación y crecimiento.
          </p>
          <Button size="lg" className="bg-[#D4FF00] text-[#000F0D] hover:bg-[#D4FF00]/90">
            Agendar consulta estratégica
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D0D0D] py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <Image src="/RBco.svg" width={75} height={24} alt="RB Consulting"  className="mb-4"/>
              <p className="text-[#F0F0F0]/70 max-w-md">
                Desarrollamos tecnología de clase mundial que impulsa el crecimiento de negocios visionarios.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4">Servicios</h4>
                <ul className="space-y-2 text-[#F0F0F0]/70">
                  <li>
                    <Link href="#" className="hover:text-[#D4FF00]">
                      Web & Mobile
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#D4FF00]">
                      AI & Machine Learning
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#D4FF00]">
                      Data Engineering
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Empresa</h4>
                <ul className="space-y-2 text-[#F0F0F0]/70">
                  <li>
                    <Link href="#" className="hover:text-[#D4FF00]">
                      Sobre nosotros
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#D4FF00]">
                      Casos de éxito
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#D4FF00]">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Legal</h4>
                <ul className="space-y-2 text-[#F0F0F0]/70">
                  <li>
                    <Link href="#" className="hover:text-[#D4FF00]">
                      Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#D4FF00]">
                      Términos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[#F0F0F0]/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#F0F0F0]/50 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} RB Consulting. Todos los derechos reservados.
              </p>
              <div className="flex items-center space-x-8">
                <p className="text-sm text-[#F0F0F0]/50">Respaldado por:</p>
                <div className="flex items-center space-x-8">
                  <span className="text-[#F0F0F0]/70">
                    <Image src="/google-for-startups.png" alt="google for Startups" width={160} height={20} />
                  </span>
                  <span className="text-[#F0F0F0]/70">
                    <Image src="/ms-for-startups.png" alt="MS for Startups" width={100} height={100} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
