import { useState } from 'react';
import { ShoppingCart, User, Heart, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Vamos usar router depois

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="bg-gray-900 text-white py-2 text-sm">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <p>Frete grátis acima de R$ 299 • Entrega em até 48h</p>
            <div className="flex items-center gap-4">
              <select className="bg-transparent text-xs border-none focus:outline-none">
                <option>🇧🇷 PT-BR</option>
              </select>
              <button className="flex items-center gap-1 hover:text-blue-400">
                <User size={16} /> Minha Conta
              </button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">M</div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">MarcaPro</h1>
                <p className="text-xs text-gray-500 -mt-1">Marketing Profissional</p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar produtos, serviços..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-black">
              <Heart size={22} />
              <span className="hidden lg:inline">Favoritos</span>
            </button>

            <Link to="/cart" className="relative flex items-center gap-2 text-gray-700 hover:text-black">
              <ShoppingCart size={24} />
              <span className="hidden lg:inline">Carrinho</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition">
              <User size={20} />
              <span className="hidden md:inline">Entrar</span>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} border-t lg:border-none`}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-blue-600 transition">Início</Link>
            <Link to="/produtos" className="hover:text-blue-600 transition">Produtos</Link>
            <Link to="/servicos" className="hover:text-blue-600 transition">Serviços</Link>
            <Link to="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <Link to="/sobre" className="hover:text-blue-600 transition">Sobre Nós</Link>
            <Link to="/contato" className="hover:text-blue-600 transition">Contato</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <section className="hero-bg bg-cover bg-center h-[90vh] flex items-center text-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tighter">
            Marketing que <span className="text-blue-400">converte</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10">
            Soluções completas de marketing digital, sites profissionais e estratégias que geram resultados reais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition flex items-center justify-center gap-3">
              Comprar Agora
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition">
              Solicitar Orçamento
            </button>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-sm">
            <div>✓ +500 clientes</div>
            <div>✓ ROI médio de 380%</div>
            <div>✓ Suporte 24/7</div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Produtos em Destaque</h2>
          <p className="text-center text-gray-600 mb-12">O que nossos clientes mais amam</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1,2,3,4].map((i) => (
              <div key={i} className="group border rounded-3xl overflow-hidden hover:shadow-2xl transition">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">📦</div>
                </div>
                <div className="p-6">
                  <div className="text-blue-600 font-semibold">R$ 299,90</div>
                  <h3 className="font-semibold mt-1 mb-2">Pacote Marketing Completo</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">Site + SEO + Gestão de anúncios por 3 meses</p>
                  <button className="mt-6 w-full bg-black text-white py-3 rounded-2xl hover:bg-gray-800">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">O que nossos clientes dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Excelente atendimento!", "Resultados incríveis em 30 dias", "Melhor investimento da minha empresa"].map((text, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-3xl">
                <p className="italic">"{text}"</p>
                <div className="mt-6 text-sm">— Cliente {i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Pronto para crescer?</h2>
          <p className="text-xl mb-10">Vamos transformar sua presença digital em resultados concretos.</p>
          <button className="bg-white text-blue-600 px-12 py-5 rounded-full text-xl font-semibold hover:bg-gray-100">
            Falar com um Especialista
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
