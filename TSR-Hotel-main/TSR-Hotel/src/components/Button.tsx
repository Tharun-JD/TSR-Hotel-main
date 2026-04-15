interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string; // Add this explicitly to be safe, though extends covers it
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = "",
  ...props 
}: ButtonProps) {
  const baseStyles = "px-8 py-3 font-medium uppercase text-sm tracking-wide rounded relative overflow-hidden group transition-all duration-300 active:scale-95";
  const variants = {
    primary: "bg-[#7a9b3c] text-white hover:shadow-lg hover:shadow-[#7a9b3c]/50 hover:-translate-y-1",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-[#7a9b3c] hover:shadow-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-[#6a8b2c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded"></span>
      )}
    </button>
  );
}
