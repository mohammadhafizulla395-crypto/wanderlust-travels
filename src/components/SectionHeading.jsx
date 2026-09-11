export default function SectionHeading({ title, subtitle, center = true, className = '' }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className={`text-terracotta font-semibold text-xs tracking-[0.2em] uppercase mb-2 ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold ${center ? 'mx-auto' : ''}`} style={{ maxWidth: center ? '600px' : undefined }}>
        {title}
      </h2>
    </div>
  )
}
