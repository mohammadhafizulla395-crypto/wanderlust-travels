import { Link } from 'react-router-dom'

export default function Card({ to, image, icon, title, subtitle, description, children, className = '' }) {
  const Wrapper = to ? Link : 'div'
  const wrapperProps = to ? { to } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {image && (
        <div className="overflow-hidden">
          {image}
        </div>
      )}
      {icon && (
        <div className="h-48 bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center overflow-hidden">
          <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
        </div>
      )}
      {(title || subtitle || description || children) && (
        <div className="p-6">
          {subtitle && <div className="text-xs text-neutral-400 mb-2">{subtitle}</div>}
          {title && (
            <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
              {title}
            </h3>
          )}
          {description && <p className="text-neutral-500 text-sm line-clamp-2">{description}</p>}
          {children}
        </div>
      )}
    </Wrapper>
  )
}
