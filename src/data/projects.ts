import type { Project } from "../types/global";

import fasciaBoard from "../assets/fascia board.webp";
import fasciaBoard2 from "../assets/fascia board2.webp";
import soffitAndFascia from "../assets/soffit and fascia.webp";
import soffitAndFascia2 from "../assets/soffit and fascia2.webp";
import gutterProtection from "../assets/gutter protection.webp";
import gutterProtection2 from "../assets/gutter protection2.webp";
import gutter2 from "../assets/gutter2.webp";
import gutter from "../assets/gutter.webp";

export const projects: Project[] = [
  {
    title: "Fascia Board",
    description: "Custom fascia board installation for a clean, finished look and long-lasting protection.",
    images: [fasciaBoard, fasciaBoard2],
  },
  {
    title: "Soffit and Fascia",
    description: "Seamless soffit and fascia work, ensuring proper ventilation and a beautiful finish.",
    images: [soffitAndFascia, soffitAndFascia2],
  },
  {
    title: "Gutter Protection",
    description: "Advanced gutter protection systems to keep debris out and water flowing.",
    images: [gutterProtection, gutterProtection2],
  },
  {
    title: "Gutter",
    description: "Seamless gutter installation for maximum durability and water management.",
    images: [gutter, gutter2],
  },
];
