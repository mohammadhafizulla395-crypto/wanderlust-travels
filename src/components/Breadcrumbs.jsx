import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items, light = false }) {
  const base = light ? 'text-stone-500' : 'text-white/70'
  const sep = light ? 'text-stone-300' : 'text-white/40'
  const active = light ? 'text-charcoal' : 'text-white'
  const hover = light ? 'hover:text-charcoal' : 'hover:text-white'

  return (
    <nav className={`text-sm ${base} mb-6`} aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link to="/" className={`${hover} transition-colors`}>Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span className={sep}>/</span>
            {item.to ? (
              <Link to={item.to} className={`${hover} transition-colors`}>
                {item.label}
              </Link>
            ) : (
              <span className={active}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
