import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items }) {
  return (
    <nav className="text-sm text-white/50 mb-5" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span className="text-white/25">/</span>
            {item.to ? (
              <Link to={item.to} className="hover:text-white transition-colors">{item.label}</Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
