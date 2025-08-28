import { testimonials } from "../data/about";
import { useState, useEffect } from "react";

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setActiveIndex((current) => (current + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((current) => (current + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="w-full bg-background py-16 relative overflow-hidden">
      {/* Blobs decorativos para harmonia visual */}
      <div className="absolute -top-24 left-0 w-60 h-60 rounded-full opacity-10 z-0" style={{ backgroundColor: '#0086c5' }} />
      <div className="absolute bottom-0 right-10 w-40 h-40 rounded-full opacity-10 z-0" style={{ backgroundColor: '#4C6EF5' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="h-px w-6 bg-gray-300"></div>
            <span className="mx-3 text-sm font-semibold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, #0086c5, #4C6EF5)` }}>
              Testimonials
            </span>
            <div className="h-px w-6 bg-gray-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-primary-dark tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-2 font-medium">
            Don't just take our word for it – here's what our satisfied clients have to say.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-visible">
            <div className="bg-white border border-primary/10 rounded-2xl shadow-lg p-8 transition-all duration-500 ease-out" style={{ borderTop: `3px solid #0086c5`, transform: isAnimating ? 'scale(0.97)' : 'scale(1)' }}>
              {/* Quote icon */}
              <svg className="w-8 h-8 mb-3 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
              <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">{testimonials[activeIndex].text}</p>
              <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 text-white text-lg font-bold" style={{ backgroundColor: '#0086c5' }}>
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-primary-dark text-base">{testimonials[activeIndex].name}</div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <span>{testimonials[activeIndex].location}</span>
                    <span className="mx-1">•</span>
                    <RatingStars rating={testimonials[activeIndex].rating} />
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation */}
            <button className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center focus:outline-none border border-primary/10" onClick={handlePrev} aria-label="Previous testimonial">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center focus:outline-none border border-primary/10" onClick={handleNext} aria-label="Next testimonial">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Indicator dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-200 rounded-full ${index === activeIndex ? 'w-8 h-2' : 'w-2 h-2 opacity-40'}`}
                style={{ backgroundColor: '#0086c5' }}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                aria-label={`View testimonial ${index + 1}`}
              >
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
