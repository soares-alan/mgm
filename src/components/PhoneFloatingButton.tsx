

export type PhoneFloatingButtonProps = {
  phoneNumber: string; // Número no formato tel: ou apenas dígitos
  displayNumber?: string; // Número formatado para exibição
  tooltip?: string;
  className?: string;
};


const styles = `
@keyframes phone-shake-smooth {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(-8deg); }
  20% { transform: rotate(8deg); }
  30% { transform: rotate(-6deg); }
  40% { transform: rotate(6deg); }
  50% { transform: rotate(-4deg); }
  60% { transform: rotate(4deg); }
  70% { transform: rotate(-2deg); }
  80% { transform: rotate(2deg); }
  90% { transform: rotate(-1deg); }
  100% { transform: rotate(0deg); }
}
`;


function PhoneFloatingButton({
  phoneNumber,
  displayNumber = "(727) 270-1358",
  tooltip = "Call now!",
  className = "",
}: PhoneFloatingButtonProps) {
  return (
    <>
      <style>{styles}</style>
      <div className="fixed z-50 bottom-6 right-6 flex items-center">
        <a
          href={`tel:${phoneNumber}`}
          title={tooltip}
          className={`flex items-center justify-center bg-[#0086c5] text-white rounded-full shadow-lg hover:bg-[#005e8a] transition-colors duration-200 w-16 h-16 group ${className}`}
          aria-label={tooltip}
        >
          <svg
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            style={{ animation: "phone-shake-smooth 1.6s infinite cubic-bezier(.36,.07,.19,.97)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="sr-only">{displayNumber}</span>
        </a>
        {/* Badge Free Estimate ao lado do botão */}
        <span
          className="ml-2 px-4 py-1.5 rounded-xl font-bold text-sm tracking-wide animate-fade-in"
          style={{
            background: 'linear-gradient(90deg, #e0f3ff 0%, #b6e0fa 100%)',
            color: '#0086c5',
            boxShadow: '0 2px 12px 0 rgba(0,134,197,0.13)',
            border: '1.5px solid #b6e0fa',
            letterSpacing: '0.04em',
          }}
        >
          Free Estimate
        </span>
      </div>
    </>
  );
}

export default PhoneFloatingButton;
