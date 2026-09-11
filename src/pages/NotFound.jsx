import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="bg-primary-50 py-20 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 text-center">
        <h1 className="font-heading text-8xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-neutral-500 max-w-md mx-auto mb-8">
          Looks like this page has wandered off the beaten path. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
          >
            Return Home
          </Link>
          <Link
            to="/destinations"
            className="inline-block border-2 border-primary-200 hover:border-primary-300 text-primary-700 font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
          >
            Browse Destinations
          </Link>
        </div>
      </div>
    </div>
  )
}
