export default function SectionHeading({ title, subtitle, center = true, className = '' }) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className={`text-secondary-500 font-semibold text-sm tracking-[0.15em] uppercase mb-3 ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight ${center ? 'mx-auto' : ''}`} style={{ maxWidth: center ? '680px' : undefined }}>
        {title}
      </h2>
    </div>
  )
}
