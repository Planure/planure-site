
// Site institucional Planure - Criado via Canvas GPT

export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="w-full p-6 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-blue-900">Planure</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#sobre" className="hover:text-blue-700">Sobre</a>
          <a href="#servicos" className="hover:text-blue-700">Soluções</a>
          <a href="#contato" className="hover:text-blue-700">Contato</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-900">Consultoria estratégica para empresas</h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg">Soluções claras, com propósito, ética e visão.</p>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Sobre nós</h3>
          <p className="text-gray-800 mb-4">Somos Jullye e Leandro, especialistas em gestão empresarial com experiências consolidadas em administração, engenharia e liderança de operações.</p>
          <p className="text-gray-800 mb-4">Unimos conhecimento técnico e visão estratégica para transformar a forma como as empresas organizam seus processos e conduzem seus resultados.</p>
          <p className="text-gray-800 mb-4">A Planure nasceu da vivência prática em ambientes corporativos e empreendedores, onde identificamos um obstáculo comum: a dificuldade de integrar áreas, alinhar equipes e estruturar uma gestão orientada à estratégia.</p>
          <p className="text-gray-800 mb-4">Criamos a consultoria com o propósito de oferecer soluções personalizadas, práticas e eficazes, apoiando empresas que buscam crescimento com eficiência, propósito e direção clara.</p>
          <p className="text-gray-800">Acreditamos que negócios sustentáveis exigem estrutura, visão e decisões baseadas em processos inteligentes. E é exatamente isso que entregamos.</p>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Nossas Soluções</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 list-disc pl-5">
            <li>Gestão de Ativos</li>
            <li>Gestão de Projetos</li>
            <li>Gestão Operacional</li>
            <li>Gestão de Processos</li>
            <li>Gestão Orçamentária</li>
          </ul>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Entre em contato</h3>
          <p className="text-gray-700 mb-2">Envie um e-mail para <a href="mailto:contato@planureoficial.com.br" className="text-blue-700 underline">contato@planureoficial.com.br</a></p>
          <p className="text-gray-700 mb-6">Em breve disponibilizaremos um canal direto via WhatsApp.</p>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Redes sociais</h4>
            <div className="flex justify-center space-x-6 text-blue-800">
              <a href="https://www.linkedin.com/company/planuregestao" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/planure.gestao/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-100">
        <p>&copy; {new Date().getFullYear()} Planure Gestão Integrada. Todos os direitos reservados.</p>
      </footer>

      {/* Botão lateral do WhatsApp (placeholder) */}
      <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg text-sm cursor-not-allowed opacity-50" title="Canal em breve">
        WhatsApp
      </div>
    </main>
  );
}
