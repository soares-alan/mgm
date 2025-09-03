// Props para o botão flutuante de ligação telefônica
export type PhoneFloatingButtonProps = {
  phoneNumber: string; // Número no formato tel: ou apenas dígitos
  displayNumber?: string; // Número formatado para exibição
  tooltip?: string;
  className?: string;
};

export interface FAQItem {
  question: string;
  answer: string;
}
export type ProjectCardProps = {
  title: string;
  description: string;
  images: string[];
  isActive: boolean;
};
export type Project = {
  title: string;
  description: string;
  images: string[];
};

export interface Service {
  title: string;
  subtitle: string;
  points: string[];
}

export type Pill = {
  title: string;
  text: string;
  icon: React.ReactNode;
};
export type Review = {
  author: string;
  text: string;
  rating: number;
  source?: string;
};

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
};

export type AboutUsProps = {
  imageSrc?: string;
  reviews?: Review[];
  testimonials?: Testimonial[];
  className?: string;
  showGoogleReview?: boolean;
};

export type HeroWithFormProps = {
  preventBodyOverflow?: boolean;
  imageSrc?: string;
};
