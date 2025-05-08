const TrustedBy = () => {
  const companies = ["Acme Inc.", "TechCorp", "Innovate Labs", "Future Systems", "Global Tech", "Nexus Group"]

  return (
    <div className="container mx-auto max-w-5xl">
      <p className="text-center text-sm uppercase tracking-wider text-[#F0F0F0]/60 mb-6">
        Empresas que confían en nosotros
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {companies.map((company, index) => (
          <div key={index} className="text-[#F0F0F0]/80 font-medium">
            {company}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustedBy
