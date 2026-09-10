export default function SectionHeading({ title, subtitle, center = true, className = '' }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-neutral-500 max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
