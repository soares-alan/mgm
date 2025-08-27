import { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para detectar scroll e aplicar efeito de shrink
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup do event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Faixa azul com telefone - visível apenas no mobile */}
      <div className="md:hidden w-full fixed top-0 left-0 z-50" style={{ background: '#0086c5', height: '44px' }}>
        <div className="flex items-center justify-center h-full">
          <a href="tel:7272701358" className="flex items-center space-x-2" style={{ color: '#fff', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#fff' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span style={{ color: '#fff' }}>Call 727-270-1358</span>
          </a>
        </div>
      </div>
      <nav 
        className={`fixed w-full z-40 transition-all duration-300 ease-in-out border-b border-gray-200 bg-white
          ${isScrolled ? 'py-1 shadow-md' : 'py-2'}
          top-11 md:top-0
        `}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo - Alinhado à esquerda */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="MGM Logo" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-20'
              }`}
              style={{ maxHeight: isScrolled ? '40px' : '80px', height: isScrolled ? '40px' : '80px', width: 'auto' }}
            />
          </div>

        {/* Links de navegação - Visíveis apenas em desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            className="font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{ color: '#222222' }}
            onMouseOver={e => (e.currentTarget.style.color = '#0086c5')}
            onMouseOut={e => (e.currentTarget.style.color = '#222222')}
            onFocus={e => (e.currentTarget.style.color = '#0086c5')}
            onBlur={e => (e.currentTarget.style.color = '#222222')}
            tabIndex={0}
          >Home</a>
          <a 
            href="#about" 
            className="font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{ color: '#222222' }}
            onMouseOver={e => (e.currentTarget.style.color = '#0086c5')}
            onMouseOut={e => (e.currentTarget.style.color = '#222222')}
            onFocus={e => (e.currentTarget.style.color = '#0086c5')}
            onBlur={e => (e.currentTarget.style.color = '#222222')}
            tabIndex={0}
          >About Us</a>
          <a 
            href="#services" 
            className="font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{ color: '#222222' }}
            onMouseOver={e => (e.currentTarget.style.color = '#0086c5')}
            onMouseOut={e => (e.currentTarget.style.color = '#222222')}
            onFocus={e => (e.currentTarget.style.color = '#0086c5')}
            onBlur={e => (e.currentTarget.style.color = '#222222')}
            tabIndex={0}
          >Services</a>
          <a 
            href="#projects" 
            className="font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{ color: '#222222' }}
            onMouseOver={e => (e.currentTarget.style.color = '#0086c5')}
            onMouseOut={e => (e.currentTarget.style.color = '#222222')}
            onFocus={e => (e.currentTarget.style.color = '#0086c5')}
            onBlur={e => (e.currentTarget.style.color = '#222222')}
            tabIndex={0}
          >Projects</a>
        </div>

        {/* Telefone de contato - Alinhado à direita */}
        <div className="hidden md:flex items-center">
          <a 
            href="tel:7272701358" 
            className="transition-colors flex items-center"
            style={{ color: '#0086c5' }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="#0086c5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            <span className={`font-medium ${isScrolled ? 'text-sm' : 'text-base'}`}>
              Call 727-270-1358
            </span>
          </a>
        </div>

        {/* Botão de menu mobile - Visível apenas em mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 focus:outline-none transition-colors"
            style={{ color: '#222222' }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {/* Menu mobile lateral (off-canvas) */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ borderLeft: '1px solid #e5e7eb' }}
      >
        {/* Botão X para fechar o menu mobile */}
            <div
              className="flex justify-end px-4 pb-2"
              style={{ paddingTop: isScrolled ? '54px' : '74px' }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fechar menu"
                className="p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{ color: '#222222' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4 px-6 mt-12 flex-1">
          <a 
            href="#home" 
            className="py-2 px-4 font-medium border-b border-gray-100 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            style={{ color: '#222222', background: isMobileMenuOpen ? '#f7f7f7' : undefined }}
            onClick={() => setIsMobileMenuOpen(false)}
            onMouseOver={e => (e.currentTarget.style.color = '#0086c5')}
            onMouseOut={e => (e.currentTarget.style.color = '#222222')}
            onFocus={e => (e.currentTarget.style.color = '#0086c5')}
            onBlur={e => (e.currentTarget.style.color = '#222222')}
            tabIndex={0}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="py-2 px-4 font-medium border-b border-gray-100 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            style={{ color: '#222222', background: isMobileMenuOpen ? '#f7f7f7' : undefined }}
            onClick={() => setIsMobileMenuOpen(false)}
            onMouseOver={e => (e.currentTarget.style.color = '#0086c5')}
            onMouseOut={e => (e.currentTarget.style.color = '#222222')}
            onFocus={e => (e.currentTarget.style.color = '#0086c5')}
            onBlur={e => (e.currentTarget.style.color = '#222222')}
            tabIndex={0}
          >
            About Us
          </a>
          <a 
            href="#services" 
            className="py-2 px-4 font-medium border-b border-gray-100 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            style={{ color: '#222222', background: isMobileMenuOpen ? '#f7f7f7' : undefined }}
            onClick={() => setIsMobileMenuOpen(false)}
            onMouseOver={e => (e.currentTarget.style.color = '#0086c5')}
            onMouseOut={e => (e.currentTarget.style.color = '#222222')}
            onFocus={e => (e.currentTarget.style.color = '#0086c5')}
            onBlur={e => (e.currentTarget.style.color = '#222222')}
            tabIndex={0}
          >
            Services
          </a>
          <a 
            href="#projects" 
            className="py-2 px-4 font-medium border-b border-gray-100 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            style={{ color: '#222222', background: isMobileMenuOpen ? '#f7f7f7' : undefined }}
            onClick={() => setIsMobileMenuOpen(false)}
            onMouseOver={e => (e.currentTarget.style.color = '#0086c5')}
            onMouseOut={e => (e.currentTarget.style.color = '#222222')}
            onFocus={e => (e.currentTarget.style.color = '#0086c5')}
            onBlur={e => (e.currentTarget.style.color = '#222222')}
            tabIndex={0}
          >
            Projects
          </a>
          
              {/* Telefone removido do menu mobile */}
            </div>
            {/* Logo na parte inferior do menu lateral mobile */}
            <div className="flex justify-center items-end pb-14 pt-12">
              <img src={logo} alt="MGM Logo" className="h-20 w-auto opacity-90" />
        </div>
      </div>
    </nav>
  </>
  );
};

export default Navbar;
