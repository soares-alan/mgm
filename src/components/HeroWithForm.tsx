

import { useEffect } from 'react';
import mgmHero from '../assets/mgm_hero.png';


import type { HeroWithFormProps } from "../types/global";

const AVANTTO_SCRIPT_SRC = 'https://api.avanttocrm.com/js/form_embed.js';

function HeroWithForm({ preventBodyOverflow = false, imageSrc = mgmHero }: HeroWithFormProps) {
  // Overflow do body controlado enquanto o Hero está montado
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (preventBodyOverflow) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      if (preventBodyOverflow) {
        document.body.style.overflow = originalOverflow;
      }
    };
  }, [preventBodyOverflow]);

  // Injeção segura do script do Avantto
  useEffect(() => {
    // Evita múltiplas injeções do script do Avantto
  if (document.querySelector(`script[src='${AVANTTO_SCRIPT_SRC}']`)) return;
    const script = document.createElement('script');
    script.src = AVANTTO_SCRIPT_SRC;
    script.async = true;
    script.setAttribute('data-avantto', 'true');
    document.body.appendChild(script);
    return () => {
      // Remove apenas se foi injetado por este componente
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <section
      className="relative w-full h-screen overflow-hidden pt-16"
      aria-label="Hero com formulário de orçamento"
      role="region"
    >
      {/* Imagem de fundo */}
      <img
        src={imageSrc}
        alt="MGM Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none pointer-events-none"
        draggable={false}
        aria-hidden="true"
      />
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/70 z-10" aria-hidden="true" />
      {/* Centralização real do card do formulário na viewport visível */}
  <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] w-full px-4 mt-4 md:mt-8">
        <div
          className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full max-w-[420px] mx-2 md:mx-0"
          role="form"
          aria-label="Formulário de orçamento"
        >
          <iframe
            src="https://api.avanttocrm.com/widget/form/YKEVtCOHzFBtRPvnySyk"
            id="inline-YKEVtCOHzFBtRPvnySyk"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Get a Quote"
            data-height="445"
            data-layout-iframe-id="inline-YKEVtCOHzFBtRPvnySyk"
            data-form-id="YKEVtCOHzFBtRPvnySyk"
            title="Get a Quote"
            className="w-full h-[420px] md:h-[445px] rounded-lg border-none overflow-hidden"
            style={{ minHeight: 320 }}
            aria-label="Formulário de orçamento"
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroWithForm;
