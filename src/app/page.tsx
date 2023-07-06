import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <div>
          <h1>Olá, eu sou o Fredson</h1>
          <h2>Desenvolvedor Front-End</h2>
        </div>

      </div>

      <div className="experiencias">
        <h3>Experiencia</h3>
        <p>Texto</p>
        <div className="experiencia-tempo">

        </div>
      </div>

      <div className="infos">
        <h3>Linguagens</h3>
        <div className="linguagens-info">
          <span>🇧🇷 Portugues - Nativo</span>
        </div>

        <h3>Formação</h3>
        <span>
          Sou graduado em Análise e Desenvolvimento de Sistemas e atualmente estou cursando pós-graduação em Projetos de Aplicativos Móveis Multiplataformas e Desenvolvimento Front-End. 
          Possuo experiência profissional em desenvolvimento web utilizando tecnologias de ponta, como HTML, CSS3, JavaScript, Bootstrap e ReactJS. 
        </span>
      </div>

    </main>
  )
}


