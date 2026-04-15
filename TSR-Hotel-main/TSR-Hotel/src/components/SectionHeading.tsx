interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ children, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-light text-[#7a9b3c] mb-4 tracking-wide">
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
