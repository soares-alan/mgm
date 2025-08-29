

import React from "react";
import { projects } from "../data/projects";

import type { ProjectCardProps } from "../types/global";

function ProjectCard({ title, description, images, isActive }: ProjectCardProps) {
  const [idx, setIdx] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [modalIdx, setModalIdx] = React.useState(0);
  // Pausar slideshow quando modal está aberto
  React.useEffect(() => {
    if (showModal) return;
    if (!isActive) return;
    setIdx(i => (i + 1) % images.length);
  }, [isActive, showModal, images.length]);
  // Ao abrir o modal, manter a imagem fixa e permitir navegação
  const openModal = () => {
    setModalIdx(idx);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);
  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIdx(i => (i - 1 + images.length) % images.length);
  };
  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIdx(i => (i + 1) % images.length);
  };
  return (
    <>
      <div className="group bg-white border border-primary/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <img
            src={images[idx]}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            loading="lazy"
            onClick={openModal}
            style={{ cursor: 'pointer' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 pointer-events-none" />
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {images.map((_: string, i: number) => (
                <span
                  key={i}
                  className={`block w-2 h-2 rounded-full ${i === idx ? 'bg-primary' : 'bg-gray-300'} transition-colors`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-col justify-between p-6">
          <h3 className="text-lg md:text-xl font-semibold text-primary mb-1 text-center tracking-tight">{title}</h3>
          <p className="text-sm text-gray-700 text-center mb-1 leading-relaxed">{description}</p>
        </div>
      </div>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative max-w-2xl w-full mx-4 flex items-center"
            onClick={e => e.stopPropagation()}
          >
            {images.length > 1 && (
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition z-10"
                onClick={prevImg}
                aria-label="Anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <img
              src={images[modalIdx]}
              alt={title}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl animate-fadeIn"
              draggable={false}
            />
            {images.length > 1 && (
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition z-10"
                onClick={nextImg}
                aria-label="Próxima"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
            <button
              className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition"
              onClick={closeModal}
              aria-label="Fechar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
// FadeIn animation for modal (inserido dinamicamente se não existir)
if (typeof window !== 'undefined' && !document.getElementById('fadeInKeyframes')) {
  const style = document.createElement('style');
  style.id = 'fadeInKeyframes';
  style.innerHTML = `@keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } } .animate-fadeIn { animation: fadeIn 0.3s ease; }`;
  document.head.appendChild(style);
}


export default function Projects() {
  // Parâmetros do efeito dominó
  const dominoDelay = 2000; // 2s entre cada card
  const numCards = projects.length;
  const [activeCard, setActiveCard] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % numCards);
    }, dominoDelay);
    return () => clearInterval(timer);
  }, [numCards, dominoDelay]);

  return (
  <section id="projects" className="w-full bg-background py-16 relative overflow-hidden">
      {/* Blobs decorativos estilo Services, mas em posições diferentes */}
      <div className="absolute -top-24 right-0 w-72 h-72 rounded-full opacity-10 z-0" style={{ backgroundColor: '#0086c5' }} />
      <div className="absolute top-1/2 -left-20 w-40 h-40 rounded-full opacity-10 z-0" style={{ backgroundColor: '#4C6EF5' }} />
      <div className="absolute bottom-0 right-10 w-32 h-32 rounded-full opacity-10 z-0" style={{ backgroundColor: '#0086c5' }} />
      <div className="absolute bottom-10 left-1/4 w-44 h-44 rounded-full opacity-10 z-0" style={{ backgroundColor: '#4C6EF5' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="h-px w-6 bg-gray-300"></div>
            <span 
              className="mx-3 text-sm font-semibold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r"
              style={{ backgroundImage: `linear-gradient(to right, #0086c5, #4C6EF5)` }}
            >
              Project Highlights
            </span>
            <div className="h-px w-6 bg-gray-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-primary-dark tracking-tight">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-2 font-medium">
            Discover some of our completed projects across Florida.
          </p>
        </div>
  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {projects.map(({ title, description, images }, i) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              images={images}
              isActive={i === activeCard}
            />
          ))}
        </div>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-8 text-center leading-relaxed">
          Discover our seamless gutter, soffit, and fascia installations—completed with precision and attention to detail. Every project reflects our experience, quality, and commitment to protecting and enhancing homes across Florida.
        </p>
      </div>
  </section>
  );
}
