
import logo from '../assets/logo.webp';
import { FaFacebookF, FaInstagram, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  return (
  <footer className="bg-[#666666] text-white pt-10">
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo e slogan */}
          <div className="flex-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
            <img src={logo} alt="MGM Logo" className="h-14 mb-3" />
            <span className="italic text-sm text-white/90 text-center md:text-left block max-w-xs">
              Protecting Florida homes with seamless precision since 2017.
            </span>
          </div>

          {/* Contato */}
          <div className="flex-1 flex flex-col items-center">
            <span className="font-semibold text-base mb-1">Contact</span>
            <span className="text-sm">Tampa, Florida – United States</span>
            <a href="tel:+17272701358" className="mt-2 text-sm hover:underline">(727) 270-1358</a>
            <a href="mailto:aluminummgm@gmail.com" className="text-sm hover:underline">aluminummgm@gmail.com</a>
          </div>

          {/* Links rápidos e redes sociais */}
          <div className="flex-1 flex flex-col items-center md:items-end gap-2">
            <nav className="flex flex-col items-center md:items-end gap-1 mb-2">
              <a href="#about" className="hover:underline text-sm">About Us</a>
              <a href="#services" className="hover:underline text-sm">Services</a>
              <a href="#contact" className="hover:underline text-sm">Contact</a>
            </nav>
            <div className="flex gap-3 mt-2 mb-4">
              <a href="https://www.facebook.com/share/175rBi8fp2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-200">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/mgmaluminum?igsh=Zjd6MGwxNjNlajJ5" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-200">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
  <div className="bg-[#666666] text-xs text-white/80 py-3 px-4 flex flex-col md:flex-row items-center justify-between border-t border-white/10">
        <span>&copy; {new Date().getFullYear()} MGM Aluminum. All rights reserved.</span>
        <a href="#top" className="flex items-center gap-1 hover:underline mt-2 md:mt-0">
          <FaArrowUp size={14} />
          <span>Back to top</span>
        </a>
      </div>
    </footer>
  );
}