

import React, { useRef, useState } from "react";

import qualityIcon from "../assets/quality.png";
import insuranceIcon from "../assets/insurance.png";
import guaranteeIcon from "../assets/guarantee.png";
import browserImg from "../assets/browser copy.png";


import type { Service } from "../types/global";

const servicesData: Service[] = [
  {
    title: "K-Style Seamless Gutters",
    subtitle:
      'Custom-fit style gutters (6", 7") designed for maximum water flow and minimal maintenance.',
    points: [
      "Precision measurements",
      "Proper slope for drainage",
      "Durable materials",
    ],
  },
  {
    title: "Industrial Gutters",
    subtitle:
      'Heavy-duty solutions for commercial properties and homes with high water volume including box gutters (7", 9").',
    points: [
      "Extra-large capacity",
      "Reinforced hangers",
      "Commercial-grade material",
      "Box gutter options available",
    ],
  },
  {
    title: "Signature Half-Round Gutters",
    subtitle:
      "Our exclusive handcrafted half-round design that combines timeless elegance with superior functionality.",
    points: [
      "Artisan-crafted perfect curves",
      "Enhanced laminar water flow",
      "Premium materials with 25-year finish",
      "Exclusive MGM craftsmanship",
    ],
  },
  {
    title: "Soffit Installation",
    subtitle:
      "Protect your roof's overhang while providing ventilation and aesthetic appeal with vented or solid options.",
    points: [
      "Vented and solid options available",
      "Custom colors to match",
      "Durable materials",
    ],
  },
];

export default function Services() {
  const themeColor = "#0086c5";

  // Magnifier state and logic
  const magnifierSize = 160; // px
  const zoom = 2.2;
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    if (!imgRef.current) return;
    const { left, top } = imgRef.current.getBoundingClientRect();
    // Calcula a posição relativa ao tamanho real da imagem renderizada
    const x = e.clientX - left;
    const y = e.clientY - top;
    setMagnifierPos({ x, y });
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
  <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: themeColor }} />
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
              <span className="mt-4 text-sm text-primary/80 italic">* All colors are available for custom projects</span>
            </div>
          ))}
        </div>

        {/* Imagem com lupa - layout original restaurado */}
        <div className="flex flex-col items-center my-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center">Browse our wide range of color options</h3>
          <p className="text-lg text-[#444] mb-6 text-center max-w-xl">Discover the ideal hue that matches your style.</p>
          <div className="relative w-full flex justify-center">
            <img
              ref={imgRef}
              src={browserImg}
              alt="Color Options"
              className="w-full max-w-4xl rounded-2xl object-contain shadow-xl border border-primary/10 cursor-zoom-in"
              style={{ background: 'linear-gradient(90deg, #f7fafc 60%, #e3f2fd 100%)' } as React.CSSProperties}
              onMouseEnter={() => setShowMagnifier(true)}
              onMouseLeave={() => setShowMagnifier(false)}
              onMouseMove={handleMouseMove}
            />
            {/* Magnifier glass */}
            {showMagnifier && imgRef.current && (
              <div
                style={{
                  position: 'absolute',
                  pointerEvents: 'none',
                  left: `${magnifierPos.x - magnifierSize * .25}px`,
                  top: `${magnifierPos.y - magnifierSize * .5}px`,
                  width: magnifierSize,
                  height: magnifierSize,
                  borderRadius: '50%',
                  boxShadow: '0 2px 16px 0 #0086c555',
                  border: '3px solid #0086c5',
                  background: `url(${imgRef.current.src}) no-repeat`,
                  backgroundSize: `${imgRef.current.width * zoom}px ${imgRef.current.height * zoom}px`,
                  backgroundPosition: `-${magnifierPos.x * zoom - magnifierSize / 2}px -${magnifierPos.y * zoom - magnifierSize / 2}px`,
                  zIndex: 30,
                  transition: 'box-shadow 0.2s',
                } as React.CSSProperties}
              />
            )}
          </div>
        </div>

        {/* Icons Legend */}
  <div className="flex flex-row justify-center items-center gap-8 mt-16 overflow-x-auto whitespace-nowrap">
          <div className="flex flex-col items-center">
            <img
              src={qualityIcon}
              alt="High Quality"
              className="h-12 w-12 mb-2"
            />
            <span className="text-sm font-medium text-[#222222]">
              High Quality
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={insuranceIcon}
              alt="Insured & Licensed"
              className="h-12 w-12 mb-2"
            />
            <span className="text-sm font-medium text-[#222222]">
              Insured & Licensed
            </span>
          </div>
          <div className="flex flex-col items-center">
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
      </div>
    </section>
  );
}