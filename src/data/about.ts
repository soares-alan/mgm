import type { Pill, Testimonial } from "../types/global";
import aboutUsImg from "../assets/aboutus.webp";

export const defaultPillars = (): Pill[] => [
  {
    title: "Commitment",
    text:
      "We take every job seriously, providing precise installations that protect your home from leaks, mold, and costly water damage.",
    icon: null, // SVG inline no componente
  },
  {
    title: "Excellence",
    text:
      "By using only high quality materials and modern techniques, we deliver long lasting results with a flawless finish that enhances both the protection and curb appeal of your property.",
    icon: null,
  },
  {
    title: "Dedication",
    text:
      "Your satisfaction is our priority. From the first call to the final inspection, our dedicated team provides personalized service and tailored solutions, always striving to exceed expectations.",
    icon: null,
  },
];

export const testimonials: Testimonial[] = [
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

export const aboutParagraphs = [
  "The story of MGM Aluminum began with humble beginnings. Our founder started out as a simple helper on job sites, learning the trade step by step. It was during those early days that he discovered his true passion: gutter installation and home protection.",
  "With dedication, hard work, and a vision to do better, he gradually built his own company from the ground up. What started as one man's dream has now grown into a trusted business that has served more than 18,000 homes across Florida since 2017.",
  "At MGM Aluminum, we believe that passion and experience make the difference. That is why our team is 100% our own staff — never outsourced, ensuring the same commitment to quality and care that our founder had on his very first job.",
];

export { aboutUsImg };
