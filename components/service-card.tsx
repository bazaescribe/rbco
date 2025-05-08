import { Code, Brain, BarChart2, Cloud, GraduationCap, Rocket } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const getIcon = (): JSX.Element => {
    const iconProps = { className: "h-8 w-8 text-[#D4FF00]" }

    switch (icon) {
      case "code":
        return <Code {...iconProps} />
      case "brain":
        return <Brain {...iconProps} />
      case "bar-chart-2":
        return <BarChart2 {...iconProps} />
      case "cloud":
        return <Cloud {...iconProps} />
      case "graduation-cap":
        return <GraduationCap {...iconProps} />
      case "rocket":
        return <Rocket {...iconProps} />
      default:
        return <Code {...iconProps} />
    }
  }

  return (
    <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="mb-4">{getIcon()}</div>
        <h3 className="text-xl font-bold text-[#000F0D]">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-[#0D0D0D]/80">{description}</p>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
