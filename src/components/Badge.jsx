export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-neutral-100 text-neutral-600',
    primary: 'bg-primary-50 text-primary-700',
    secondary: 'bg-secondary-50 text-secondary-700',
    accent: 'bg-accent-50 text-accent-700',
  }

  return (
    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
