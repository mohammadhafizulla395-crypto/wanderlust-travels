import { Link } from 'react-router-dom'

export default function Button({ children, to, variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500',
    secondary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500',
    accent: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500',
    outline: 'border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-400',
    ghost: 'text-secondary-500 hover:bg-secondary-500/10 focus:ring-secondary-500',
    white: 'bg-white text-neutral-900 hover:bg-neutral-50 focus:ring-neutral-400',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>
  }

  return <button className={classes} {...props}>{children}</button>
}
