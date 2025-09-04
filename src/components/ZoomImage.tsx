import React, { useRef, useState, useEffect } from "react";

interface ZoomImageProps {
  src: string;
  alt?: string;
  zoomSize?: number;
  zoomScale?: number;
  className?: string;
  borderColor?: string;
  borderWidth?: number;
  shadowColor?: string;
}

/**
 * ZoomImage - Componente que substitui o ponteiro do mouse por uma lente de aumento
 * 
 * @param src - URL da imagem
 * @param alt - Texto alternativo para a imagem
 * @param zoomSize - Tamanho da lente de aumento em pixels
 * @param zoomScale - Fator de ampliação (2 = 2x, 3 = 3x, etc.)
 * @param className - Classes adicionais para o container da imagem
 * @param borderColor - Cor da borda da lente de aumento
 * @param borderWidth - Largura da borda da lente de aumento em pixels
 * @param shadowColor - Cor da sombra da lente de aumento
 */
const ZoomImage: React.FC<ZoomImageProps> = ({
  src,
  alt = "",
  zoomSize = 120,
  zoomScale = 3,
  className = "",
  borderColor = "#0086c5",
  borderWidth = 3,
  shadowColor = "#0086c555",
}) => {
  const [showMagnifier, setShowMagnifier] = useState<boolean>(false);
  const [magnifierPos, setMagnifierPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [shouldClose, setShouldClose] = useState<boolean>(false);

  // Detecta se é dispositivo móvel
  useEffect(() => {
    const checkMobile = typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setIsMobile(checkMobile);
    
    // Se for mobile, aumenta o fator de ampliação para focar melhor na cor
    if (checkMobile) {
      // Não alteramos o zoomScale aqui, pois ele é passado como prop
    }
  }, []);

  // Atualiza o tamanho da imagem quando ela é carregada
  useEffect(() => {
    const updateImageSize = () => {
      if (imgRef.current) {
        setImageSize({
          width: imgRef.current.width,
          height: imgRef.current.height
        });
      }
    };

    const imgElement = imgRef.current;
    if (imgElement) {
      if (imgElement.complete) {
        updateImageSize();
      } else {
        imgElement.addEventListener('load', updateImageSize);
        return () => {
          imgElement.removeEventListener('load', updateImageSize);
        };
      }
    }
  }, [src]);

  // Manipula o movimento do mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (!imgRef.current) return;
    
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;
    
    // Garante que o zoom não ultrapasse os limites da imagem
    const radius = zoomSize / 2 / zoomScale;
    x = Math.max(radius, Math.min(x, width - radius));
    y = Math.max(radius, Math.min(y, height - radius));
    
    setMagnifierPos({ x, y });
  };

  // Manipula o início do toque (mobile)
  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    if (!imgRef.current) return;
    
    if (!showMagnifier) {
      const touch = e.touches[0];
      const { left, top, width, height } = imgRef.current.getBoundingClientRect();
      let x = touch.clientX - left;
      let y = touch.clientY - top;
      
      // Para mobile, usamos um raio menor para ter maior precisão no foco da cor
      const effectiveScale = zoomScale * 1.5; // Aumentamos a escala efetiva para mobile
      const radius = zoomSize / 2 / effectiveScale;
      
      // Garante que o zoom não ultrapasse os limites da imagem
      x = Math.max(radius, Math.min(x, width - radius));
      y = Math.max(radius, Math.min(y, height - radius));
      
      setMagnifierPos({ x, y });
      setShowMagnifier(true);
      setShouldClose(false);
    } else {
      setShouldClose(true);
    }
  };

  // Manipula o movimento do toque (mobile)
  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (!imgRef.current || !showMagnifier) return;
    
    setShouldClose(false);
    const touch = e.touches[0];
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    let x = touch.clientX - left;
    let y = touch.clientY - top;
    
    // Para mobile, usamos um raio menor para ter maior precisão no foco da cor
    const effectiveScale = zoomScale * 1.5; // Aumentamos a escala efetiva para mobile
    const radius = zoomSize / 2 / effectiveScale;
    
    // Garante que o zoom não ultrapasse os limites da imagem
    x = Math.max(radius, Math.min(x, width - radius));
    y = Math.max(radius, Math.min(y, height - radius));
    
    setMagnifierPos({ x, y });
  };

  // Manipula o fim do toque (mobile)
  const handleTouchEnd = () => {
    if (shouldClose) {
      setShowMagnifier(false);
      setShouldClose(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-auto object-contain"
        style={{ cursor: showMagnifier ? "none" : "zoom-in" }}
        onMouseEnter={!isMobile ? () => setShowMagnifier(true) : undefined}
        onMouseLeave={!isMobile ? () => setShowMagnifier(false) : undefined}
        onMouseMove={!isMobile ? handleMouseMove : undefined}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      />
      {showMagnifier && imgRef.current && (
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            left: magnifierPos.x - zoomSize / 2,
            top: magnifierPos.y - zoomSize / 2,
            width: zoomSize,
            height: zoomSize,
            borderRadius: "50%",
            boxShadow: `0 2px 16px 0 ${shadowColor}`,
            border: `${borderWidth}px solid ${borderColor}`,
            background: `url(${src}) no-repeat`,
            backgroundSize: `${imageSize.width * (isMobile ? zoomScale * 1.5 : zoomScale)}px ${imageSize.height * (isMobile ? zoomScale * 1.5 : zoomScale)}px`,
            backgroundPosition: `-${magnifierPos.x * (isMobile ? zoomScale * 1.5 : zoomScale) - zoomSize / 2}px -${magnifierPos.y * (isMobile ? zoomScale * 1.5 : zoomScale) - zoomSize / 2}px`,
            zIndex: 30,
            transition: "box-shadow 0.2s",
          }}
        />
      )}
    </div>
  );
};

export default ZoomImage;
