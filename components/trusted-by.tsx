import Image from "next/image"

const TrustedBy = () => {
  const companies = ["aliada", "telcel", "microsoft", "homely", "liverpool", "devf"]

  return (
    <div className="container mx-auto max-w-5xl">
      <p className="text-center text-sm uppercase tracking-wider text-[#F0F0F0]/60 mb-6">
        Empresas que confían en nosotros
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {companies.map((company, index) => (
          <div key={index} className="text-[#F0F0F0]/80 font-medium">
            <Image src={`/${company}.svg`} width={100} height={20} alt={`${company} logo`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustedBy
