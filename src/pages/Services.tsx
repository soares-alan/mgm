

import React, { useRef, useState } from "react";

import qualityIcon from "../assets/quality.webp";
import insuranceIcon from "../assets/insurance.webp";
import guaranteeIcon from "../assets/guarantee.webp";
import browserImg from "../assets/color chart.webp";


import { servicesData } from "../data/services";


export default function Services() {
  const themeColor = "#0086c5";

  // Magnifier state and logic
  const [magnifierSize, setMagnifierSize] = useState(120);
  const [zoom, setZoom] = useState(3);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [shouldClose, setShouldClose] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    setIsMobile(
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    );
  }, []);

  // Ajusta zoom e tamanho do magnifier para mobile
  React.useEffect(() => {
    if (isMobile) {
      setMagnifierSize(80);
      setZoom(4.5);
    } else {
      setMagnifierSize(120);
      setZoom(3);
    }
  }, [isMobile]);

  // Ajusta zoom e tamanho do magnifier para mobile
  React.useEffect(() => {
    if (isMobile) {
      setMagnifierSize(80);
      setZoom(4.5);
    } else {
      setMagnifierSize(120);
      setZoom(3);
    }
  }, [isMobile]);

  function handleMouseMove(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;
    // Limitar o centro do magnifier para não ultrapassar as bordas
    const radius = magnifierSize / 2 / zoom;
    x = Math.max(radius, Math.min(x, width - radius));
    y = Math.max(radius, Math.min(y, height - radius));
    setMagnifierPos({ x, y });
  }

  function handleTouchStart(e: React.TouchEvent<HTMLImageElement>) {
    if (!imgRef.current) return;
    if (!showMagnifier) {
      const touch = e.touches[0];
      const { left, top, width, height } = imgRef.current.getBoundingClientRect();
      let x = touch.clientX - left;
      let y = touch.clientY - top;
      const radius = magnifierSize / 2 / zoom;
      x = Math.max(radius, Math.min(x, width - radius));
      y = Math.max(radius, Math.min(y, height - radius));
      setMagnifierPos({ x, y });
      setShowMagnifier(true);
      setShouldClose(false);
    } else {
      setShouldClose(true);
    }
  }

  function handleTouchMove(e: React.TouchEvent<HTMLImageElement>) {
    if (!imgRef.current || !showMagnifier) return;
    setShouldClose(false); // Se o usuário moveu, não fecha
    const touch = e.touches[0];
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    let x = touch.clientX - left;
    let y = touch.clientY - top;
    const radius = magnifierSize / 2 / zoom;
    x = Math.max(radius, Math.min(x, width - radius));
    y = Math.max(radius, Math.min(y, height - radius));
    setMagnifierPos({ x, y });
  }

  function handleTouchEnd() {
    if (shouldClose) {
      setShowMagnifier(false);
      setShouldClose(false);
    }
  }

  return (
    <section
      id="services"
      className="w-full bg-background py-16 relative overflow-hidden"
      aria-labelledby="services-title"
      role="region"
    >
  {/* Blobs decorativos variados e um azul escuro */}
  <div className="absolute -top-32 -left-20 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: themeColor }} />
  <div className="absolute top-1/3 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: themeColor }} />
  {/* <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: themeColor }} /> */}
  <div className="absolute bottom-0 left-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: themeColor }} />
  <div className="absolute bottom-10 right-10 w-44 h-44 rounded-full opacity-10" style={{ backgroundColor: themeColor }} />
  {/* Círculo azul escuro para contraste */}
  <div className="absolute -top-20 right-1/4 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: '#005e8c' }} />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="h-px w-6 bg-gray-300"></div>
            <span 
              className="mx-3 text-sm font-semibold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r"
              style={{ backgroundImage: `linear-gradient(to right, ${themeColor}, #4C6EF5)` }}
            >
              Our Solutions
            </span>
            <div className="h-px w-6 bg-gray-300"></div>
          </div>
          <h2 
            id="services-title" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800"
          >
            Our <span style={{ color: themeColor }}>Services</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: themeColor }}></div>
        </div>



        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {servicesData.map((svc) => (
            <div
              key={svc.title}
              className="relative bg-white/90 border-2 border-primary/10 rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              style={{ minHeight: 240 }}
            >
              {/* Detalhe azul sólido no topo do card, igual ao Hero */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0086c5] rounded-full" />
              {/* Círculo decorativo */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-300" />
              <h3 className="text-2xl font-bold text-primary mb-2 drop-shadow-sm group-hover:text-[#005e8c] transition-colors duration-300">
                {svc.title}
              </h3>
              <p className="text-base text-[#444] mb-4 font-medium italic group-hover:text-primary/80 transition-colors duration-300">{svc.subtitle}</p>
              <ul className="space-y-2 mt-2">
                {svc.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-[#222] transition-colors duration-300">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Browse our wide range of color options */}
        <div className="flex flex-col items-center my-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center">Browse our wide range of color options</h3>
          <p className="text-lg text-[#444] mb-6 text-center max-w-xl">Discover the ideal hue that matches your style.</p>
          <div className="relative w-full flex justify-center">
            {/* Blob decorativo atrás da imagem, mais acima e fora */}
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full opacity-20 z-0" style={{ backgroundColor: themeColor }} />
            <img
              ref={imgRef}
              src={browserImg}
              alt="Color Options"
              className="w-full max-w-4xl rounded-tl-[48px] rounded-br-[48px] rounded-tr-md rounded-bl-md object-contain border-2 border-primary cursor-zoom-in relative z-10"
              style={{ background: 'none' } as React.CSSProperties}
              onMouseEnter={!isMobile ? () => setShowMagnifier(true) : undefined}
              onMouseLeave={!isMobile ? () => setShowMagnifier(false) : undefined}
              onMouseMove={!isMobile ? handleMouseMove : undefined}
              onTouchStart={isMobile ? handleTouchStart : undefined}
              onTouchMove={isMobile ? handleTouchMove : undefined}
              onTouchEnd={isMobile ? handleTouchEnd : undefined}
            />
            {/* Magnifier glass */}
            {showMagnifier && imgRef.current && (
              <div
                style={{
                  position: 'absolute',
                  pointerEvents: 'none',
                  left: isMobile
                    ? `${magnifierPos.x - magnifierSize / 2}px`
                    : `${magnifierPos.x + magnifierSize * 0.1}px`,
                  top: `${magnifierPos.y - magnifierSize * 0.5}px`,
                  width: magnifierSize,
                  height: magnifierSize,
                  borderRadius: '50%',
                  boxShadow: '0 2px 16px 0 #0086c555',
                  border: '3px solid #0086c5',
                  background: `url(${imgRef.current.src}) no-repeat`,
                  backgroundSize: `${imgRef.current.width * zoom}px ${imgRef.current.height * zoom}px`,
                  backgroundPosition: isMobile
                    ? `-${magnifierPos.x * zoom - magnifierSize / 2}px -${magnifierPos.y * zoom - magnifierSize / 2}px`
                    : `-${magnifierPos.x * zoom - magnifierSize / 2}px -${magnifierPos.y * zoom - magnifierSize / 2}px`,
                  zIndex: 30,
                  transition: 'box-shadow 0.2s',
                } as React.CSSProperties}
              />
            )}
          </div>
        </div>

        {/* Icons Legend */}
  <div className="flex flex-row justify-center gap-2 md:gap-8 mt-16 px-2 w-auto">
          <div className="flex flex-col items-center shrink-0">
            <img
              src={qualityIcon}
              alt="High Quality"
              className="h-12 w-12 mb-2"
            />
            <span className="text-sm font-medium text-[#222222]">
              High Quality
            </span>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <img
              src={insuranceIcon}
              alt="Insured & Licensed"
              className="h-12 w-12 mb-2"
            />
            <span className="text-sm font-medium text-[#222222]">
              Insured & Licensed
            </span>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <img
              src={guaranteeIcon}
              alt="Warranty 10 Years"
              className="h-12 w-12 mb-2"
            />
            <span className="text-sm font-medium text-[#222222]">
              Warranty 10 Years
            </span>
          </div>
        </div>

        {/* Lista de cidades atendidas */}

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-[#222] mb-2">We Service Florida</h3>
          <p className="mb-6 text-[#444]">Atendemos as principais cidades da região:</p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              "Tampa", "Brandon", "Lakeland", "Wesley Chapel", "Plant City", "Zephyrhills", "Lithia", "Seffner", "Temple Terrace", "Thonotosassa", "Riverview", "Clearwater", "Saint Petersburg", "Apollo Beach", "Bradenton", "Ruskin", "Sun City Center", "Land O Lakes", "Tarpon Springs", "Palm Harbour", "Sarasota", "Venice", "Lakewood Ranch", "Englewood", "Tampa Bay", "Palmetto", "Ellenton"
            ].map(city => (
              <span key={city} className="px-4 py-1 rounded-full bg-primary/10 text-[#222] font-medium shadow-sm">{city}</span>
            ))}
            <span className="px-4 py-1 rounded-full bg-primary text-white font-semibold shadow">And more…</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-md hover:bg-[#005e8c] transition-colors duration-200 text-lg mt-2"
            style={{ boxShadow: '0 2px 8px 0 #0086c533' }}
          >
            <span className="font-semibold">Contact Us</span>
            <span
              className="hidden sm:inline"
              style={{
                display: 'inline-block',
                animation: 'phoneWiggle 1.2s ease-in-out infinite',
                position: 'relative'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: 'white' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
          <style>{`
            @keyframes phoneWiggle {
              0% { transform: rotate(0deg); }
              10% { transform: rotate(-15deg); }
              20% { transform: rotate(15deg); }
              30% { transform: rotate(-10deg); }
              40% { transform: rotate(10deg); }
              50% { transform: rotate(-5deg); }
              60% { transform: rotate(5deg); }
              70% { transform: rotate(0deg); }
              100% { transform: rotate(0deg); }
            }
          `}</style>
          </a>
          <style>{`
            @keyframes arrowMove {
              0% { left: 0; }
              50% { left: 10px; }
              100% { left: 0; }
            }
          `}</style>
        </div>

      </div>
    </section>
  );
}