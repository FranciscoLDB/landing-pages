import { useState } from 'react';
import { Phone, MapPin, Clock, Battery, Wrench, Truck, Car, Key, ShieldCheck, Menu, X } from 'lucide-react';
import babImg from './assets/BAB-5.jpeg';
import bannerImg from './assets/banner.png';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Link do WhatsApp (Substitua pelo seu número real)
  const whatsappLink = "https://wa.me/554187954171?text=Olá, preciso de um orçamento para guincho.";

  const services = [
    { icon: <Truck size={32} />, title: "Reboque Leve", desc: "Transporte seguro para carros de passeio com rapidez." },
    { icon: <Truck size={32} />, title: "Reboque Utilitário", desc: "Equipamento preparado para vans, caminhonetes e utilitários." },
    { icon: <Battery size={32} />, title: "Carga de Bateria", desc: "Seu carro não liga? Fazemos a partida auxiliar (chupeta) no local." },
    { icon: <Wrench size={32} />, title: "Troca de Pneu", desc: "Auxílio rápido para pneus furados ou danificados." },
    { icon: <Car size={32} />, title: "Retirada de Garagem", desc: "Equipamento especial para garagens subterrâneas e locais difíceis." },
    { icon: <Key size={32} />, title: "Chaveiro Auto", desc: "Abertura de veículos trancados sem danificar a porta." },
    { icon: <Car size={32} />, title: "Serviço de Táxi", desc: "Levamos você com segurança enquanto seu carro é transportado." },
  ];

  return (
    <div className="font-sans text-gray-800 antialiased">
      
      {/* Navbar */}
      <nav className="bg-slate-900 text-white fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-amber-500">RDP GUINCHOS</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="hover:text-amber-500 transition">Início</a>
              <a href="#servicos" className="hover:text-amber-500 transition">Serviços</a>
              <a href="#diferenciais" className="hover:text-amber-500 transition">Diferenciais</a>
              <a 
                href={whatsappLink}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2 rounded-full font-bold transition duration-300 flex items-center gap-2"
              >
                <Phone size={18} /> (41) 98795-4171
              </a>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 pb-4 px-4">
            <a href="#inicio" className="block py-2 hover:text-amber-500" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#servicos" className="block py-2 hover:text-amber-500" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#diferenciais" className="block py-2 hover:text-amber-500" onClick={() => setIsMenuOpen(false)}>Diferenciais</a>
            <a href={whatsappLink} className="block mt-2 bg-amber-500 text-slate-900 text-center py-2 rounded font-bold">Ligar Agora</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[600px] flex items-center justify-center bg-slate-900">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
             src={babImg}
             alt="Guincho na estrada" 
             className="w-full h-full object-cover"
           />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Problemas com seu veículo? <br />
            <span className="text-amber-500">A RDP Guinchos resolve.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Há 17 anos oferecendo socorro rápido, segurança e preço justo.
            Atendemos leves, utilitários e emergências 24h.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href={whatsappLink}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-lg px-8 py-4 rounded-full font-bold shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone /> CHAMAR AGORA
            </a>
            <a 
              href="#servicos"
              className="bg-white hover:bg-gray-100 text-slate-900 text-lg px-8 py-4 rounded-full font-bold shadow-lg transition"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossos Serviços</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600">Soluções completas para você e seu veículo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-b-4 border-amber-500">
                <div className="text-amber-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials / Trust Section */}
      <section id="diferenciais" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a RDP Guinchos?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Não somos apenas um guincho, somos uma empresa com estrutura completa para garantir que seu patrimônio esteja seguro, não importa a hora ou o lugar.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 p-3 rounded-full text-slate-900">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">17 Anos de Experiência</h4>
                    <p className="text-gray-400">Atuamos no mercado com profissionalismo e conhecimento técnico consolidado.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 p-3 rounded-full text-slate-900">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Pátio Próprio e Seguro</h4>
                    <p className="text-gray-400">Se o destino não puder receber o carro na hora, guardamos seu veículo em nosso pátio fechado e seguro.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 p-3 rounded-full text-slate-900">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Rapidez no Atendimento</h4>
                    <p className="text-gray-400">Sabemos que você tem pressa. Nossas unidades estão posicionadas para chegar o mais rápido possível.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-700">
                {/* Image Placeholder for Patio or Truck */}
                <img 
                    src={bannerImg}
                    alt="Frota RDP Guinchos" 
                    className="w-full h-full object-cover"
                />
            </div>

          </div>
        </div>
      </section>

      {/* CTA Footer Stripe */}
      <section className="bg-amber-500 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Precisa de ajuda agora?</h2>
          <p className="text-slate-800 text-xl mb-8">Não fique parado na estrada. Nossa equipe está pronta para te atender.</p>
          <a 
            href={whatsappLink}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition shadow-lg"
          >
            <Phone /> SOLICITAR SOCORRO
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">RDP GUINCHOS</h3>
            <p className="mt-2">Excelência em remoção e assistência automotiva.</p>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} RDP Guinchos. Todos os direitos reservados.</p>
            <p className="text-sm mt-1">Design focado em conversão.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition transform hover:scale-110 flex items-center justify-center"
        aria-label="Fale no WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.54 1.932.884 3.031.884 3.182 0 5.769-2.587 5.769-5.766.001-3.18-2.584-5.767-5.994-5.767zm0 13.891c-1.482 0-2.892-.4-4.113-1.095l-4.499 1.18 1.204-4.393c-.799-1.344-1.226-2.885-1.226-4.481 0-4.839 3.939-8.776 8.776-8.776 4.695 0 8.536 3.731 8.536 8.324 0 5.032-4.225 9.241-8.678 9.241z"/></svg>
      </a>

    </div>
  );
};

export default LandingPage;