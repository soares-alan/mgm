import { useState, useEffect } from "react";
import type { AboutUsProps, Pill, Testimonial } from "../types/global";
import aboutUsImg from "../assets/aboutus copy.png";

/**
 * AboutUs - Modern, clean, and performance-optimized layout
 * 
 * Features:
 * - Fully responsive design with elegant transitions
 * - Optimized for all screen sizes
 * - Clean component structure with proper separation of concerns
 * - Improved accessibility
 * - Enhanced visual appeal with subtle animations
 */

/* ---------- Data / Types ---------- */
const defaultPillars = (iconColor = "text-[#0086c5]"): Pill[] => [
  {
    title: "Commitment",
    text:
      "We take every job seriously, providing precise installations that protect your home from leaks, mold, and costly water damage.",
    icon: (
      <svg
        className={`w-7 h-7 ${iconColor}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    text:
      "By using only high quality materials and modern techniques, we deliver long lasting results with a flawless finish that enhances both the protection and curb appeal of your property.",
    icon: (
      <svg
        className={`w-7 h-7 ${iconColor}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Dedication",
    text:
      "Your satisfaction is our priority. From the first call to the final inspection, our dedicated team provides personalized service and tailored solutions, always striving to exceed expectations.",
    icon: (
      <svg
        className={`w-7 h-7 ${iconColor}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

// Reviews para o carrossel
const testimonials = [
  {
    name: "Maria Silva",
    location: "Miami, FL",
    rating: 5,
    text: "MGM Aluminum installed gutters on my house with great precision. The work was flawless and they left everything clean when they finished. Highly recommended!",
    date: "2 months ago"
  },
  {
    name: "John Davis",
    location: "Orlando, FL",
    rating: 5,
    text: "Excellent service from start to finish. The team was punctual, professional, and the work was perfect. The gutters work flawlessly during heavy rains.",
    date: "1 month ago"
  },
  {
    name: "Ana Rodriguez",
    location: "Tampa, FL",
    rating: 5,
    text: "I hired MGM to install gutters in my new house and I was impressed. The service was great and the end result exceeded my expectations.",
    date: "3 weeks ago"
  },
  {
    name: "Robert Johnson",
    location: "St. Petersburg, FL",
    rating: 5,
    text: "Very professional team! They completed the installation ahead of schedule and at a competitive price. Their attention to detail is impressive.",
    date: "1 month ago"
  },
  {
    name: "Emily Parker",
    location: "Clearwater, FL",
    rating: 5,
    text: "Our home looks so much better with the new seamless gutters. We've had heavy rain since installation and no leaks whatsoever. Outstanding service!",
    date: "2 months ago"
  },
  {
    name: "Michael Thompson",
    location: "Jacksonville, FL",
    rating: 4,
    text: "MGM team was very knowledgeable about gutter systems. They helped me choose the right style and color for my home. Installation was quick and professional.",
    date: "3 months ago"
  },
  {
    name: "Sarah Wilson",
    location: "Fort Lauderdale, FL",
    rating: 5,
    text: "After a hurricane damaged our gutters, MGM came quickly to assess and replace them. Their quick response and quality work saved us from potential water damage.",
    date: "2 weeks ago"
  },
  {
    name: "Carlos Mendez",
    location: "West Palm Beach, FL",
    rating: 5,
    text: "The team at MGM took the time to explain the different options available. No pressure sales, just honest advice. The installation was fast and the result is beautiful.",
    date: "1 month ago"
  },
  {
    name: "Jennifer Adams",
    location: "Naples, FL",
    rating: 5,
    text: "Our custom home needed a specialized gutter solution. MGM delivered exactly what we needed with precision and professionalism. Worth every penny.",
    date: "6 weeks ago"
  },
  {
    name: "David Miller",
    location: "Sarasota, FL",
    rating: 4,
    text: "We've used MGM for both our primary residence and rental property. Both times they provided excellent service at reasonable prices. Very reliable company.",
    date: "2 months ago"
  }
];

const aboutParagraphs = [
  "The story of MGM Aluminum began with humble beginnings. Our founder started out as a simple helper on job sites, learning the trade step by step. It was during those early days that he discovered his true passion: gutter installation and home protection.",
  "With dedication, hard work, and a vision to do better, he gradually built his own company from the ground up. What started as one man's dream has now grown into a trusted business that has served more than 18,000 homes across Florida since 2017.",
  "At MGM Aluminum, we believe that passion and experience make the difference. That is why our team is 100 percent our own staff — never outsourced, ensuring the same commitment to quality and care that our founder had on his very first job.",
];

/* ---------- Presentational components ---------- */

/* Enhanced rating stars component with improved animation */
function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
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

/* Modern testimonial carousel with responsive layout */
function TestimonialCarousel({ testimonials, themeColor }: { testimonials: Testimonial[]; themeColor: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-rotation with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setActiveIndex((current) => (current + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navigation handlers
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

  // Group testimonials for desktop view (3 at a time)
  const getVisibleGroup = (startIndex: number) => {
    const group = testimonials.slice(startIndex, startIndex + 3);
    if (group.length < 3) {
      return [...group, ...testimonials.slice(0, 3 - group.length)];
    }
    return group;
  };
  
  // Get current visible testimonials
  const visibleTestimonials = getVisibleGroup(activeIndex);

  return (
    <div className="relative">
      {/* Desktop view: 3 cards in horizontal layout with navigation dots */}
      <div className="hidden md:block">
        <div className="relative px-4">
          {/* Desktop navigation buttons - Previous */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              onClick={handlePrev}
              aria-label="Previous testimonials"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          {/* Desktop navigation buttons - Next */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              onClick={handleNext}
              aria-label="Next testimonials"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {visibleTestimonials.map((testimonial, idx) => (
              <div 
                key={`desktop-${activeIndex + idx}`} 
                className="bg-gray-50 rounded-lg p-5 shadow-sm transition-all duration-300 hover:shadow-md"
                style={{ 
                  borderTop: `3px solid ${themeColor}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Quote icon */}
                <svg 
                  className="w-8 h-8 mb-3 text-gray-200" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
                
                {/* Testimonial text */}
                <p className="text-gray-700 italic mb-4 flex-grow">{testimonial.text}</p>
                
                {/* Footer with client info */}
                <div className="flex items-center mt-auto pt-4 border-t border-gray-200">
                  {/* Avatar placeholder with first letter */}
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3 text-white"
                    style={{ backgroundColor: themeColor }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-xs text-gray-500 flex items-center">
                      <span>{testimonial.location}</span>
                      <span className="mx-1">•</span>
                      <RatingStars rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop indicator dots - NEW STYLE */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-200 rounded-full ${
                index === activeIndex ? 'w-8 h-2' : 'w-2 h-2 opacity-40'
              }`}
              style={{ backgroundColor: themeColor }}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setActiveIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Mobile view: Single card with navigation */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div 
            className="transition-all duration-500 ease-out"
            style={{ transform: isAnimating ? 'scale(0.95)' : 'scale(1)' }}
          >
            <div 
              className="bg-gray-50 rounded-lg p-5 shadow-md"
              style={{ borderTop: `3px solid ${themeColor}` }}
            >
              {/* Quote icon */}
              <svg 
                className="w-8 h-8 mb-3 text-gray-200" 
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
              
              {/* Testimonial text */}
              <p className="text-gray-700 italic mb-4">{testimonials[activeIndex].text}</p>
              
              {/* Footer with client info */}
              <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                {/* Avatar placeholder with first letter */}
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3 text-white"
                  style={{ backgroundColor: themeColor }}
                >
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{testimonials[activeIndex].name}</div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <span>{testimonials[activeIndex].location}</span>
                    <span className="mx-1">•</span>
                    <RatingStars rating={testimonials[activeIndex].rating} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile navigation buttons */}
          <button
            className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center focus:outline-none"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center focus:outline-none"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
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
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === activeIndex ? 'w-5' : 'opacity-40'
              }`}
              style={{ backgroundColor: themeColor }}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setActiveIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Main component ---------- */
function AboutUs({
  imageSrc = aboutUsImg,
  className = "",
  themeColor = "#0086c5",
  testimonials: externalTestimonials,
}: Omit<AboutUsProps, "reviews" | "showGoogleReview"> & {
  themeColor?: string;
}) {
  const pillars = defaultPillars();
  // Use provided testimonials or fall back to default ones
  const displayTestimonials = externalTestimonials || testimonials;

  return (
    <section
      id="about"
      className={`w-full relative py-12 md:py-20 ${className}`}
      aria-labelledby="aboutus-title"
      role="region"
      style={{ scrollMarginTop: "96px" }}
    >
      {/* Background pattern elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: themeColor }}></div>
        <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: themeColor }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full opacity-5" style={{ backgroundColor: themeColor }}></div>
        <div className="absolute -bottom-10 left-1/3 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: themeColor }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Main header section with subtle design elements */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="h-px w-6 bg-gray-300"></div>
            <span 
              className="mx-3 text-sm font-semibold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r" 
              style={{ backgroundImage: `linear-gradient(to right, ${themeColor}, #4C6EF5)` }}
            >
              Our Story
            </span>
            <div className="h-px w-6 bg-gray-300"></div>
          </div>
          <h2 
            id="aboutus-title" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800"
          >
            About <span style={{ color: themeColor }}>MGM Aluminum</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: themeColor }}></div>
        </div>

        {/* Content container with more visual appeal */}
        <div className="max-w-7xl mx-auto">
          {/* Top row: Image and story side by side */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-14">
            <div className="md:flex items-stretch">
              {/* Left: Image with stats */}
              <div className="md:w-1/2 relative">
                <div className="h-full">
                  <img
                    src={imageSrc}
                    alt="MGM Aluminum team installing seamless gutters"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    style={{ minHeight: "400px", objectPosition: "14% 0%" }}
                  />
                  
                  {/* Floating stats cards with improved visual styling */}
                  <div className="absolute left-0 right-0 bottom-0 backdrop-blur-md bg-white/85 p-6 border-t border-gray-100 shadow-inner">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: themeColor }}>18K+</div>
                        <div className="text-xs md:text-sm text-gray-700 font-medium">Homes Serviced</div>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: themeColor }}>100%</div>
                        <div className="text-xs md:text-sm text-gray-700 font-medium">Own Staff</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: themeColor }}>2017</div>
                        <div className="text-xs md:text-sm text-gray-700 font-medium">Established</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right: Our story content */}
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <div className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>Our Journey</div>
                <div className="prose prose-lg max-w-none">
                  {aboutParagraphs.map((p, idx) => (
                    <p key={idx} className={`mb-4 leading-relaxed text-gray-700 ${idx === 0 ? 'text-lg font-medium' : ''}`}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle row: Core values with improved horizontal layout */}
          <div className="mb-14 px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                Our Core Values
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These values guide everything we do at MGM Aluminum and represent our commitment to you.
              </p>
              <div className="w-16 h-1 mx-auto mt-3 rounded-full" style={{ backgroundColor: themeColor }}></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <div 
                  key={p.title} 
                  className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
                  style={{ borderTop: `4px solid ${themeColor}` }}
                >
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: `${themeColor}10` }}
                  >
                    <div style={{ color: themeColor }}>{p.icon}</div>
                  </div>
                  <h4 className="font-semibold text-xl text-center mb-3">{p.title}</h4>
                  <p className="text-gray-600 text-center">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row: Testimonials with improved design */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  What Our Clients Say
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Don't just take our word for it - here's what our satisfied clients have to say.
                </p>
                <div className="w-16 h-1 mx-auto mt-3 rounded-full" style={{ backgroundColor: themeColor }}></div>
              </div>
              
              <TestimonialCarousel testimonials={displayTestimonials} themeColor={themeColor} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
